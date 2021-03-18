var RECLUSEFILE = "% The Book of Programming\n\
%% The Two Aspects\n\
Below the surface of the machine, the program moves. Without effort,\
it expands and contracts. In great harmony, electrons scatter and\
regroup. The forms on the monitor are but ripples on the water. The\
essence stays invisibly below.\
When the creators built the machine, they put in the processor and the\
memory. From these arise the two aspects of the program.\
The aspect of the processor is the active substance. It is called\
Control. The aspect of the memory is the passive substance. It is\
called Data.\
Data is made of merely bits, yet it takes complex forms. Control\
consists only of simple instructions, yet it performs difficult\
tasks. From the small and trivial, the large and complex arise.\
The program source is Data. Control arises from it. The Control\
proceeds to create new Data. The one is born from the other, the\
other is useless without the one. This is the harmonious cycle of\
Data and Control.\
Functional Programming 79\
 \
Of themselves, Data and Control are without structure. The programmers\
of old molded their programs out of this raw substance. Over time,\
the amorphous Data has crystallized into data types, and the chaotic\
Control was wrung into control structures and functions.\
%% Short Sayings\
When a student asked Fu-Tzu about the nature of the cycle of Data and\
Control, Fu-Tzu replied 'Think of a compiler, compiling itself.'\
A student asked, 'The programmers of old used only simple machines and\
no programming languages, yet they made beautiful programs. Why do we\
use complicated machines and programming languages?' Fu-Tzu replied\
'The builders of old used only sticks and clay, yet they made\
beautiful huts.'\
A hermit spent 10 years writing a program. 'My program can compute\
the motion of the stars on a 286-computer running MS DOS,' he proudly\
announced. 'Nobody owns a 286-computer or uses MS DOS anymore,'\
Fu-Tzu responded.\
Fu-Tzu had written a small program that was full of global state and\
dubious shortcuts. Reading it, a student asked 'You warned us against\
these techniques, yet I find them in your program. How can this be?'\
Fu-Tzu said, 'There is no need to fetch a water hose when the house is\
not on fire.'{This is not to be read as an encouragement of sloppy\
programming, but rather as a warning against neurotic adherence to\
rules of thumb.}\
%% Wisdom\
A student was complaining about digital numbers. 'When I take the root\
of two and then square it again, the result is already inaccurate!'\
Overhearing him, Fu-Tzu laughed. 'Here is a sheet of paper. Write down\
the precise value of the square root of two for me.'\
Fu-Tzu said, 'When you cut against the grain of the wood, much strength\
is needed. When you program against the grain of a problem, much code\
is needed.'\
Tzu-li and Tzu-ssu were boasting about the size of their latest\
programs. 'Two-hundred thousand lines,' said Tzu-li, 'not counting\
comments!' Tzu-ssu responded, 'Psah, mine is almost a *million* lines\
already.' Fu-Tzu said, 'My best program has five hundred lines.'\
Hearing this, Tzu-li and Tzu-ssu were enlightened.\
80 Chapter 5\
 \
A student had been sitting motionless behind his computer for hours,\
frowning darkly. He was trying to write a beautiful solution to a\
difficult problem but could not find the right approach. Fu-Tzu hit\
him on the back of his head and shouted, '*Type something!*' The student\
started writing an ugly solution. After he had finished, he suddenly\
understood the beautiful solution.\
%% Progression\
A beginning programmer writes his programs like an ant builds her\
hill, one piece at a time, without thought for the bigger structure.\
His programs will be like loose sand. They may stand for a while, but\
growing too big they fall apart{Referring to the danger of internal\
inconsistency and duplicated structure in unorganized code.}.\
Realizing this problem, the programmer will start to spend a lot of\
time thinking about structure. His programs will be rigidly\
structured, like rock sculptures. They are solid, but when they must\
change, violence must be done to them{Referring to the fact that\
structure tends to put restrictions on the evolution of a program.}.\
The master programmer knows when to apply structure and when to leave\
things in their simple form. His programs are like clay, solid yet\
malleable.\
"

var paragraphs = RECLUSEFILE.split("\n\n");

function forEach(array, action) {
    for(var i = 0; i<array.length; i++)
        action(array[i]);
}

function map(func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

function processParagraph(paragraph) {
    var header = 0;
    while(paragraph.charAt(header) == "%")
        header++;
    if(header > 0)
        return {type: "h" + header, content: paragraph.slice(header + 1)};
    else
        return {type: "p", content: paragraph};
}

function splitParagraph(text) {
    function split(pos) {
        if (pos == text.length) {
            return [];
        }
        else if (text.charAt(pos) =="*") {
            var end = findClosing("*", pos + 1),
                frag= {type: "emphasized", content: text.slice(pos + 1, end)};
            return [frag].concat(split(end +1));
        }
        else if (text.charAt(pos) == "{") {
            var end =findClosing("}", pos +1),
                frag = {type: "footnote", content: text.slice(pos +1, end)};
            return [frag].concat(split(end +1));
        }
        else {
            var end = findOpeningOrEnd(pos),
                frag = {type: "normal", content: text.slice(pos, end)};
            return [frag].concat(split(end));
        }
    }
    function findClosing(character, from) {
        var end = text.indexOf(character, from);
        if (end == -1) throw new Error("Missing closing '" + character + "'");
        else return end;
        }
        function findOpeningOrEnd(from) {
            function indexOrEnd(character) {
                var index = text.indexOf(character, from);
                return index == -1 ? text.length : index;
            }
                return Math.min(indexOrEnd("*"), indexOrEnd("{"));
        }
        return split(0);
    
}


console.log(processParagraph(paragraphs[0]));
console.log(map(processParagraph, RECLUSEFILE.split("\n\n")));
console.log(splitParagraph(RECLUSEFILE));
console.log(RECLUSEFILE);






































