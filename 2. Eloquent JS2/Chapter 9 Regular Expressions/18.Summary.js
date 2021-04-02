/*
Regular expressions are objects that represent patterns in strings. They
use their own language to express these patterns.

/abc/ A sequence of characters
/[abc]/ Any character from a set of characters
/[^abc]/ Any character not in a set of characters
/[0-9]/ Any character in a range of characters
/x+/ One or more occurrences of the pattern x
/x+?/ One or more occurrences, nongreedy
/x* / Zero or more occurrences
/x?/ Zero or one occurrence
/x{2,4}/ Two to four occurrences
/(abc)/ A group
/a|b|c/ Any one of several patterns
/\d/ Any digit character
/\w/ An alphanumeric character (“word character”)
/\s/ Any whitespace character
/./ Any character except newlines
/\b/ A word boundary
/^/ Start of input
/$/ End of input

A regular expression has a method test to test whether a given string
matches it. It also has a method exec that, when a match is found,
returns an array containing all matched groups. Such an array has an
index property that indicates where the match started.
Strings have a match method to match them against a regular expression 
and a search method to search for one, returning only the starting
position of the match. Their replace method can replace matches of a
pattern with a replacement string or function.
Regular expressions can have options, which are written after the
closing slash. The i option makes the match case insensitive. The g
option makes the expression global, which, among other things, causes
the replace method to replace all instances instead of just the first. The
y option makes it sticky, which means that it will not search ahead and
skip part of the string when looking for a match. The u option turns on
Unicode mode, which fixes a number of problems around the handling
of characters that take up two code units.
Regular expressions are a sharp tool with an awkward handle. They
simplify some tasks tremendously but can quickly become unmanageable when 
applied to complex problems. Part of knowing how to use
them is resisting the urge to try to shoehorn things that they cannot
cleanly express into them.
*/