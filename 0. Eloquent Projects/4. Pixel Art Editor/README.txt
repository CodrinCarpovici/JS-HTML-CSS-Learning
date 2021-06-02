Our application will be a pixel drawing program, where you can modify a 
picture pixel by pixel by manipulating a zoomed-in view of it,
shown as a grid of colored squares. You can use the program to open
image files, scribble on them with your mouse or other pointer device,
and save them.

Components

The interface for the application shows a big <canvas> element on top,
with a number of form fields below it. The user draws on the picture
by selecting a tool from a <select> field and then clicking, touching, or
dragging across the canvas. There are tools for drawing single pixels or
rectangles, for filling an area, and for picking a color from the picture.
We will structure the editor interface as a number of components, objects 
that are responsible for a piece of the DOM and that may contain
other components inside them.
The state of the application consists of the current picture, the selected 
tool, and the selected color. We’ll set things up so that the state
lives in a single value, and the interface components always base the
way they look on the current state.
To see why this is important, let’s consider the alternative—distributing
pieces of state throughout the interface. Up to a certain point, this is
easier to program. We can just put in a color field and read its value
when we need to know the current color.
But then we add the color picker—a tool that lets you click the picture
to select the color of a given pixel. To keep the color field showing the
correct color, that tool would have to know that it exists and update
it whenever it picks a new color. If you ever add another place that
makes the color visible (maybe the mouse cursor could show it), you
have to update your color-changing code to keep that synchronized.
In effect, this creates a problem where each part of the interface needs
to know about all other parts, which is not very modular. For small
applications like the one in this chapter, that may not be a problem.
For bigger projects, it can turn into a real nightmare.
To avoid this nightmare on principle, we’re going to be strict about
data flow. There is a state, and the interface is drawn based on that
state. An interface component may respond to user actions by updating
the state, at which point the components get a chance to synchronize
themselves with this new state.
In practice, each component is set up so that when it is given a new
state, it also notifies its child components, insofar as those need to be
updated. Setting this up is a bit of a hassle. Making this more convenient 
is the main selling point of many browser programming libraries.
But for a small application like this, we can do it without such 
infrastructure.
Updates to the state are represented as objects, which we’ll call actions. 
Components may create such actions and dispatch them—give
them to a central state management function. That function computes
the next state, after which the interface components update themselves
to this new state.
We’re taking the messy task of running a user interface and applying
some structure to it. Though the DOM-related pieces are still full of
side effects, they are held up by a conceptually simple backbone: the
state update cycle. The state determines what the DOM looks like,
and the only way DOM events can change the state is by dispatching
actions to the state.
There are many variants of this approach, each with its own benefits
and problems, but their central idea is the same: state changes should
go through a single well-defined channel, not happen all over the place.
Our components will be classes conforming to an interface. Their
constructor is given a state—which may be the whole application state
or some smaller value if it doesn’t need access to everything—and uses
that to build up a dom property. This is the DOM element that represents 
the component. Most constructors will also take some other
values that won’t change over time, such as the function they can use
to dispatch an action.
Each component has a syncState method that is used to synchronize
it to a new state value. The method takes one argument, the state,
which is of the same type as the first argument to its constructor.
