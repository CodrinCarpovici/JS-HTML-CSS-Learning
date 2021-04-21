import {everywhere} from "./crow-tech.js";

everywhere(nest => {
    nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
        if (neighbor == exceptFor) continue;
        requestAnimationFrame(nest, neighbor, "gossip", message);
    }
}

requestType ("gossip", (nest, message, source) => {
    if(nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${message}' from ${source}`);
    sendGossip(nest,message, source);
});

/*
To avoid sending the same message around the network forever, each
nest keeps an array of gossip strings that it has already seen. To define
this array, we use the everywhere function—which runs code on every
nest—to add a property to the nest’s state object, which is where we’ll
keep nest-local state.
When a nest receives a duplicate gossip message, which is very likely
to happen with everybody blindly resending them, it ignores it. But
when it receives a new message, it excitedly tells all its neighbors except
for the one who sent it the message.
This will cause a new piece of gossip to spread through the network
like an ink stain in water. Even when some connections aren’t currently
working, if there is an alternative route to a given nest, the gossip will
reach it through there.
This style of network communication is called flooding—it floods the
network with a piece of information until all nodes have it.
*/