//The plan for a small level might look like this:
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

/*
Periods are empty space, hash (#) characters are walls, and plus signs
are lava. The player’s starting position is the at sign (@). Every O
character is a coin, and the equal sign (=) at the top is a block of lava
that moves back and forth horizontally.
We’ll support two additional kinds of moving lava: the pipe character (|) 
creates vertically moving blobs, and v indicates dripping lava—
vertically moving lava that doesn’t bounce back and forth but only
moves down, jumping back to its start position when it hits the floor.
*/

/*
class Level
The trim method is used to remove whitespace at the start and end
of the plan string. This allows our example plan to start with a newline
so that all the lines are directly below each other. The remaining string
is split on newline characters, and each line is spread into an array,
producing arrays of characters.
So rows holds an array of arrays of characters, the rows of the plan.
We can derive the level’s width and height from these. But we must
still separate the moving elements from the background grid. We’ll call
moving elements actors. They’ll be stored in an array of objects. The
background will be an array of arrays of strings, holding field types such
as "empty", "wall", or "lava".
*/

/*
class State
As the game runs, actors will end up in different places or even disappear 
entirely (as coins do when collected). We’ll use a State class to
track the state of a running game.
*/

/*
Actor objects represent the current position and state of a given moving
element in our game. All actor objects conform to the same interface.
Their pos property holds the coordinates of the element’s top-left corner,
and their size property holds its size.
Then they have an update method, which is used to compute their
new state and position after a given time step. It simulates the thing
the actor does—moving in response to the arrow keys for the player
and bouncing back and forth for the lava—and returns a new, updated
actor object.
A type property contains a string that identifies the type of the
actor—"player", "coin", or "lava". This is useful when drawing the
game—the look of the rectangle drawn for an actor is based on its
type.
Actor classes have a static create method that is used by the Level
constructor to create an actor from a character in the level plan. It is
given the coordinates of the character and the character itself, which is
needed because the Lava class handles several different characters.
This is the Vec class that we’ll use for our two-dimensional values,
such as the position and size of actors.
*/

/*
class Vec
The times method scales a vector by a given number. It will be useful
when we need to multiply a speed vector by a time interval to get the
distance traveled during that time.
*/

/*
The different types of actors get their own classes since their behavior
is very different. Let’s define these classes. We’ll get to their update
methods later.
The player class has a property speed that stores its current speed to
simulate momentum and gravity.
*/

/*
class Player
Because a player is one-and-a-half squares high, its initial position
is set to be half a square above the position where the @ character
appeared. This way, its bottom aligns with the bottom of the square it
appeared in.
The size property is the same for all instances of Player, so we store
it on the prototype rather than on the instances themselves. We could
have used a getter like type, but that would create and return a new
Vec object every time the property is read, which would be wasteful.
(Strings, being immutable, don’t have to be re-created every time they
are evaluated.)
*/

/*
class Lava
When constructing a Lava actor, we need to initialize the object differently 
depending on the character it is based on. Dynamic lava moves
along at its current speed until it hits an obstacle. At that point, if it
has a reset property, it will jump back to its start position (dripping).
If it does not, it will invert its speed and continue in the other direction
(bouncing).
The create method looks at the character that the Level constructor
passes and creates the appropriate lava actor.
*/

/*
class Coin
Coin actors are relatively simple. They mostly just sit in their place.
But to liven up the game a little, they are given a “wobble”, a slight
vertical back-and-forth motion. To track this, a coin object stores a
base position as well as a wobble property that tracks the phase of the
bouncing motion. Together, these determine the coin’s actual position
(stored in the pos property).
In Chapter 14, we saw that Math.sin gives us the y-coordinate of a
point on a circle. That coordinate goes back and forth in a smooth
waveform as we move along the circle, which makes the sine function
useful for modeling a wavy motion.
To avoid a situation where all coins move up and down synchronously,
the starting phase of each coin is randomized. The phase of Math.sin’s
wave, the width of a wave it produces, is 2π. We multiply the value
returned by Math.random by that number to give the coin a random
starting position on the wave.
*/

/*
levelChars
Maps plan characters to either bakground grid types or actor classes
That gives us all the parts needed to create a Level instance.
*/

/*

*/