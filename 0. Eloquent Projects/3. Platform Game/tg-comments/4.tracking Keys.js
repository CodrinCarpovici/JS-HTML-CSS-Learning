/*
For a game like this, we do not want keys to take effect once per keypress. 
Rather, we want their effect (moving the player figure) to stay
active as long as they are held.
We need to set up a key handler that stores the current state of the
left, right, and up arrow keys. We will also want to call preventDefault
for those keys so that they don’t end up scrolling the page.
The following function, when given an array of key names, will return
an object that tracks the current position of those keys. It registers
event handlers for "keydown" and "keyup" events and, when the key code
in the event is present in the set of codes that it is tracking, updates
the object.
*/

/*
The same handler function is used for both event types. It looks at
the event object’s type property to determine whether the key state
should be updated to true ("keydown") or false ("keyup").
*/