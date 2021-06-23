/*
We’ll build the program piece by piece, using an object called methods
to store the functions that handle the various HTTP methods. Method
handlers are async functions that get the request object as argument and
return a promise that resolves to an object that describes the response.
*/

const { createServer } = require("http");
const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;
    handler(request)
        .catch(error => {
            if (error.status != null) return error;
            return {body: String(error), status: 500};
        })
        .then(({body, status = 200, type = "text/plain"}) => {
            response.writeHead(status, {"Content-Type": type});
            if (body && body.pipe) body.pipe(response);
            else response.end(body);
        });
}).listen(8000);

async function notAllowed(request) {
    return {
        status: 405,
        body: `Method ${request.method} not allowed.`
    };
}

/*
This starts a server that just returns 405 error responses, which is the
code used to indicate that the server refuses to handle a given method.
When a request handler’s promise is rejected, the catch call translates
the error into a response object, if it isn’t one already, so that the server
can send back an error response to inform the client that it failed to
handle the request.
The status field of the response description may be omitted, in which
case it defaults to 200 (OK). The content type, in the type property,
can also be left off, in which case the response is assumed to be plain
text.
When the value of body is a readable stream, it will have a pipe
method that is used to forward all content from a readable stream to
a writable stream. If not, it is assumed to be either null (no body), a
string, or a buffer, and it is passed directly to the response’s end method.
To figure out which file path corresponds to a request URL, the
urlPath function uses Node’s built-in url module to parse the URL. It
takes its pathname, which will be something like "/file.txt", decodes
that to get rid of the %20-style escape codes, and resolves it relative to
the program’s working directory.
*/

const { parse } = require("url");
const {resolve, sep} = require("path");

const baseDirectory = process.cwd();

function urlPath(url) {
    let {pathname} = parse(url);
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if (path != baseDirectory &&
        !path.startsWith(baseDirectory + sep)) {
        throw {status: 403, body: "Forbidden"};
    }
    return path;
}

/*
As soon as you set up a program to accept network requests, you
have to start worrying about security. In this case, if we aren’t careful,
it is likely that we’ll accidentally expose our whole file system to the
network.
File paths are strings in Node. To map such a string to an actual
file, there is a nontrivial amount of interpretation going on. Paths may,
for example, include ../ to refer to a parent directory. So one obvious
source of problems would be requests for paths like /../secret_file.
To avoid such problems, urlPath uses the resolve function from the
path module, which resolves relative paths. It then verifies that the
result is below the working directory. The process.cwd function (where
cwd stands for “current working directory”) can be used to find this
working directory. The sep binding from the path package is the system’s 
path separator—a backslash on Windows and a forward slash on
most other systems. When the path doesn’t start with the base directory, 
the function throws an error response object, using the HTTP
status code indicating that access to the resource is forbidden.
We’ll set up the GET method to return a list of files when reading a
directory and to return the file’s content when reading a regular file.
One tricky question is what kind of Content-Type header we should
set when returning a file’s content. Since these files could be anything,
our server can’t simply return the same content type for all of them.
NPM can help us again here. The mime package (content type indicators
like text/plain are also called MIME types) knows the correct type for
a large number of file extensions.
*/

const {createReadStream} = require("fs");
const {stat, readdir} = require("fs").promises;
const mime = require("mime");

methods.GET = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }
    if (stats.isDirectory()) {
        return {body: (await readdir(path)).join("\n")};
    } else {
        return {body: createReadStream(path),
                type: mime.getType(path)};
    }
};

/*
Because it has to touch the disk and thus might take a while, stat is
asynchronous. Since we’re using promises rather than callback style, it
has to be imported from promises instead of directly from fs.
When the file does not exist, stat will throw an error object with
a code property of "ENOENT". These somewhat obscure, Unix-inspired
codes are how you recognize error types in Node.
The stats object returned by stat tells us a number of things about
a file, such as its size (size property) and its modification date (mtime
property). Here we are interested in the question of whether it is a
directory or a regular file, which the isDirectory method tells us.
We use readdir to read the array of files in a directory and return
it to the client. For normal files, we create a readable stream with
createReadStream and return that as the body, along with the content
type that the mime package gives us for the file’s name.
The code to handle DELETE requests is slightly simpler.
*/

const {rmdir, unlink} = require("fs").promises;

methods.DELETE = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 204};
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return {status: 204};
};

/*
When an HTTP response does not contain any data, the status code
204 (“no content”) can be used to indicate this. Since the response to
deletion doesn’t need to transmit any information beyond whether the
operation succeeded, that is a sensible thing to return here.
You may be wondering why trying to delete a nonexistent file returns
a success status code, rather than an error. When the file that is being 
deleted is not there, you could say that the request’s objective is
already fulfilled. The HTTP standard encourages us to make requests
idempotent, which means that making the same request multiple times
produces the same result as making it once. In a way, if you try to
delete something that’s already gone, the effect you were trying to do
has been achieved—the thing is no longer there.
This is the handler for PUT requests:
*/

const {createWriteStream} = require("fs");

function pipeStream(from, to) {
    return new Promise((resolve, reject) => {
        from.on("error", reject);
        to.on("error", reject);
        to.on("finish", resolve);
        from.pipe(to);
    });
}

methods.PUT = async function(request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return {status: 204};
};

/*
We don’t need to check whether the file exists this time—if it does,
we’ll just overwrite it. We again use pipe to move data from a readable
stream to a writable one, in this case from the request to the file. But
since pipe isn’t written to return a promise, we have to write a wrapper,
pipeStream, that creates a promise around the outcome of calling pipe.
When something goes wrong when opening the file, createWriteStream
will still return a stream, but that stream will fire an "error" event.
The output stream to the request may also fail, for example if the
network goes down. So we wire up both streams’ "error" events to
reject the promise. When pipe is done, it will close the output stream,
which causes it to fire a "finish" event. That’s the point where we can
successfully resolve the promise (returning nothing).
*/


