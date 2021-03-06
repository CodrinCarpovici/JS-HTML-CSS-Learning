/*
Measuring a Robot
It’s hard to objectively compare robots by just letting them solve a few
scenarios. Maybe one robot just happened to get easier tasks or the
kind of tasks that it is good at, whereas the other didn’t.
Write a function compareRobots that takes two robots (and their starting 
memory). It should generate 100 tasks and let each of the robots
solve each of these tasks. When done, it should output the average
number of steps each robot took per task.
For the sake of fairness, make sure you give each task to both robots,
rather than generating different tasks per robot.
*/

function countSteps(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
}
  
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
      let state = VillageState.random();
      total1 += countSteps(state, robot1, memory1);
      total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
}
  
compareRobots(routeRobot, [], goalOrientedRobot, []);

/*
Robot efficiency
Can you write a robot that finishes the delivery task faster than goalOrientedRobot
? If you observe that robot’s behavior, what obviously stupid things
does it do? How could those be improved?
If you solved the previous exercise, you might want to use your
compareRobots function to verify whether you improved the robot.
*/

function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
  
      // This determines the precedence a route gets when choosing.
      // Route length counts negatively, routes that pick up a package
      // get a small bonus.
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
  
    return {direction: route[0], memory: route.slice(1)};
}
  
runRobotAnimation(VillageState.random(), lazyRobot, []);