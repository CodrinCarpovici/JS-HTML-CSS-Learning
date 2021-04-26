/*
The Hypertext Transfer Protocol (HTTP) is a protocol for 
retrieving named resources (chunks of information, such as web
pages or pictures). It specifies that the side making the request should
start with a line like this, naming the resource and the version of the
protocol that it is trying to use:

GET /index.html HTTP/1.1

Most protocols are built on top of other protocols. HTTP treats the
network as a streamlike device into which you can put bits and have
them arrive at the correct destination in the correct order. As we saw in
Chapter 11, ensuring those things is already a rather difficult problem.
The Transmission Control Protocol (TCP) is a protocol that addresses this 
problem. All Internet-connected devices “speak” it, and
most communication on the Internet is built on top of it.
A TCP connection works as follows: one computer must be waiting,
or listening, for other computers to start talking to it. To be able to
listen for different kinds of communication at the same time on a single
machine, each listener has a number (called a port) associated with
it. Most protocols specify which port should be used by default. For
example, when we want to send an email using the SMTP protocol, the
machine through which we send it is expected to be listening on port
25.
Another computer can then establish a connection by connecting to
the target machine using the correct port number. If the target machine 
can be reached and is listening on that port, the connection is
successfully created. The listening computer is called the server, and
the connecting computer is called the client.

The Web

The World Wide Web (not to be confused with the Internet as a whole)
is a set of protocols and formats that allow us to visit web pages in a
browser. The “Web” part in the name refers to the fact that such pages
can easily link to each other, thus connecting into a huge mesh that
users can move through.
To become part of the Web, all you need to do is connect a machine
to the Internet and have it listen on port 80 with the HTTP protocol
so that other computers can ask it for documents.
Each document on the Web is named by a Uniform Resource Locator
(URL), which looks something like this:

http://eloquentjavascript.net/13_browser.html
|     |                      |              |
protocol      server               path

The first part tells us that this URL uses the HTTP protocol (as
opposed to, for example, encrypted HTTP, which would be https://).
Then comes the part that identifies which server we are requesting
the document from. Last is a path string that identifies the specific
document (or resource) we are interested in.
Machines connected to the Internet get an IP address, which is a
number that can be used to send messages to that machine, and looks
something like 149.210.142.219 or 2001:4860:4860::8888. But lists of
more or less random numbers are hard to remember and awkward to
type, so you can instead register a domain name for a specific address
or set of addresses. I registered eloquentjavascript.net to point at the
IP address of a machine I control and can thus use that domain name
to serve web pages.
If you type this URL into your browser’s address bar, the browser
will try to retrieve and display the document at that URL. First, your
browser has to find out what address eloquentjavascript.net refers to.
Then, using the HTTP protocol, it will make a connection to the server
at that address and ask for the resource /13_browser.html. If all goes
well, the server sends back a document, which your browser then displays on your screen.
*/