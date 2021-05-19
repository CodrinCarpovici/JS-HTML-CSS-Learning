The Game:
-based on Dark Blue (www.lessmilk.com/games/10)
-minimalist
-platform game
-the player(dark box) has the task of collecting the yellow boxes (coins) 
 while avoiding the red stuff (lava)
-A level is completed when all the coins have been collected
-The player can walk around with the left and right arrow keys and can
 jump with the up arrow
-The game consists of a static background, laid out like a grid, with
 the moving elements overlaid on that background. Each field on the
 grid is either empty, solid, or lava
- The moving elements are the player, coins, and certain pieces of lava. 
 The positions of these elements are not constrained to the grid—their 
 coordinates may be fractional, allowing smooth motion

The Technology:
-the browser DOM to display the game
-reading user input by handling key events
-creating DOM elements and use styling to give them a background, size 
 and position
-the background can be represented as a table
-the free moving elements can be overlaid using absolutely positioned 
 elements