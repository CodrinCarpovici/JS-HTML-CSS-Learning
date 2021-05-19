/*
The requestAnimationFrame function, which we saw in Chapter 14, provides 
a good way to animate a game. But its interface is quite primitive—
using it requires us to track the time at which our function was called
the last time around and call requestAnimationFrame again after every
frame.
Let’s define a helper function that wraps those boring parts in a
convenient interface and allows us to simply call runAnimation, giving
it a function that expects a time difference as an argument and draws
a single frame. When the frame function returns the value false, the
animation stops.
*/

/*
I have set a maximum frame step of 100 milliseconds (one-tenth of
a second). When the browser tab or window with our page is hidden,
requestAnimationFrame calls will be suspended until the tab or window
is shown again. In this case, the difference between lastTime and time
will be the entire time in which the page was hidden. Advancing the
game by that much in a single step would look silly and might cause
weird side effects, such as the player falling through the floor.
The function also converts the time steps to seconds, which are an
easier quantity to think about than milliseconds.
*/

/*
The runLevel function takes a Level object and a display constructor
and returns a promise. It displays the level (in document.body) and
lets the user play through it. When the level is finished (lost or won),
runLevel waits one more second (to let the user see what happens) and
then clears the display, stops the animation, and resolves the promise
to the game’s end status.
*/

/*
A game is a sequence of levels. Whenever the player dies, the current
level is restarted. When a level is completed, we move on to the next
level. This can be expressed by the following function, which takes an
array of level plans (strings) and a display constructor
*/