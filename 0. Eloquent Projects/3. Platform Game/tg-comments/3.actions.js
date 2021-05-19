/*
The method computes the set of grid squares that the body overlaps
with by using Math.floor and Math.ceil on its coordinates. Remember
that grid squares are 1 by 1 units in size. By rounding the sides of a
box up and down, we get the range of background squares that the box
touches.
We loop over the block of grid squares found by rounding the coordinates 
and return true when a matching square is found. Squares outside
of the level are always treated as "wall" to ensure that the player can’t
leave the world and that we won’t accidentally try to read outside of
the bounds of our rows array.
The state update method uses touches to figure out whether the player
is touching lava.
*/

/*
The method is passed a time step and a data structure that tells it
which keys are being held down. The first thing it does is call the update
method on all actors, producing an array of updated actors. The actors
also get the time step, the keys, and the state, so that they can base
their update on those. Only the player will actually read keys, since
that’s the only actor that’s controlled by the keyboard.
If the game is already over, no further processing has to be done
(the game can’t be won after being lost, or vice versa). Otherwise, the
method tests whether the player is touching background lava. If so, the
game is lost, and we’re done. Finally, if the game really is still going
on, it sees whether any other actors overlap the player.
*/

/*
Overlap between actors is detected with the overlap function. It takes
two actor objects and returns true when they touch—which is the case
when they overlap both along the x-axis and along the y-axis.
*/

/*
If any actor does overlap, its collide method gets a chance to update
the state. Touching a lava actor sets the game status to "lost". Coins
vanish when you touch them and set the status to "won" when they are
the last coin of the level.
*/

/*
This update method computes a new position by adding the product
of the time step and the current speed to its old position. If no obstacle
blocks that new position, it moves there. If there is an obstacle, the
behavior depends on the type of the lava block—dripping lava has a
reset position, to which it jumps back when it hits something. Bouncing
lava inverts its speed by multiplying it by -1 so that it starts moving in
the opposite direction.

Coins use their update method to wobble. They ignore collisions
with the grid since they are simply wobbling around inside of their own
square.
*/

/*
The wobble property is incremented to track time and then used as
an argument to Math.sin to find the new position on the wave. The
coin’s current position is then computed from its base position and an
offset based on this wave.

Player motion is handled separately per axis because hitting the floor 
should not prevent horizontal motion, and hitting a wall should not 
stop falling or jumping motion.
*/

/*
The horizontal motion is computed based on the state of the left
and right arrow keys. When there’s no wall blocking the new position
created by this motion, it is used. Otherwise, the old position is kept.
Vertical motion works in a similar way but has to simulate jumping
and gravity. The player’s vertical speed (ySpeed) is first accelerated to
account for gravity.
We check for walls again. If we don’t hit any, the new position is
used. If there is a wall, there are two possible outcomes. When the up
arrow is pressed and we are moving down (meaning the thing we hit is
below us), the speed is set to a relatively large, negative value. This
causes the player to jump. If that is not the case, the player simply
bumped into something, and the speed is set to zero.
The gravity strength, jumping speed, and pretty much all other constants 
in this game have been set by trial and error. I tested values
until I found a combination I liked.
*/