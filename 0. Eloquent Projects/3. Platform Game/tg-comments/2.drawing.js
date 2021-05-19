/*
The encapsulation of the drawing code is done by defining a display
object, which displays a given level and state. The display type we
define in this chapter is called DOMDisplay because it uses DOM elements
to show the level.
We’ll be using a style sheet to set the actual colors and other fixed
properties of the elements that make up the game. It would also be
possible to directly assign to the elements’ style property when we
create them, but that would produce more verbose programs.

The elt helper function provides a succinct way to create an
element and give it some attributes and child nodes
*/

/*
A display is created by giving it a parent element to which it should
append itself and a level object.
*/

/*
The level’s background grid, which never changes, is drawn once.
Actors are redrawn every time the display is updated with a given
state. The actorLayer property will be used to track the element that
holds the actors so that they can be easily removed and replaced.
Our coordinates and sizes are tracked in grid units, where a size or
distance of 1 means one grid block. When setting pixel sizes, we will
have to scale these coordinates up—everything in the game would be
ridiculously small at a single pixel per square. The scale constant gives
the number of pixels that a single unit takes up on the screen.
*/

/*
function drawGrid
As mentioned, the background is drawn as a <table> element. This
nicely corresponds to the structure of the rows property of the level—
each row of the grid is turned into a table row (<tr> element). The
strings in the grid are used as class names for the table cell (<td>)
elements. The spread (triple dot) operator is used to pass arrays of
child nodes to elt as separate arguments.
*/

/*
Some of these (table-layout, border-spacing, and padding) are used
to suppress unwanted default behavior. We don’t want the layout of
the table to depend upon the contents of its cells, and we don’t want
space between the table cells or padding inside them.
*/

/*
function drawActors
We draw each actor by creating a DOM element for it and setting
that element’s position and size based on the actor’s properties. The
values have to be multiplied by scale to go from game units to pixels.
*/

/*
To give an element more than one class, we separate the class names
by spaces. In the CSS code shown next, the actor class gives the actors
their absolute position. Their type name is used as an extra class to
give them a color. We don’t have to define the lava class again because
we’re reusing the class for the lava grid squares we defined earlier.
*/

/*
The syncState method is used to make the display show a given state.
It first removes the old actor graphics, if any, and then redraws the
actors in their new positions. It may be tempting to try to reuse the
DOM elements for actors, but to make that work, we would need a lot
of additional bookkeeping to associate actors with DOM elements and
to make sure we remove elements when their actors vanish. Since there
will typically be only a handful of actors in the game, redrawing all of
them is not expensive.
*/

/*
By adding the level’s current status as a class name to the wrapper,
we can style the player actor slightly differently when the game is won
or lost by adding a CSS rule that takes effect only when the player has
an ancestor element with a given class.
*/
/*
In the scrollPlayerIntoView method, we find the player’s position
and update the wrapping element’s scroll position. We change the
scroll position by manipulating that element’s scrollLeft and scrollTop
properties when the player is too close to the edge.
*/