/*
the Promise.all function can be useful. It returns a promise that waits
for all of the promises in the array to resolve and then resolves to an
array of the values that these promises produced (in the same order as
the original array). If any promise is rejected, the result of Promise.all
is itself rejected.
*/

requestType("ping", () => "pong");
function availableNeighbors(nest) {
    let requests = nest.neighbors.map(neighbor => {
        return request(nest, neighbor, "ping")
            .then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
        return nest.neighbors.filter((_, i) => result[i]);
    });
}