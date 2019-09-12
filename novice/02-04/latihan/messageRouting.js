requestType("connections", (nest, {name, neighbors},
    source) => {
let connections = nest.state.connections;
if (JSON.stringify(connections.get(name)) ==
JSON.stringify(neighbors)) return;
connections.set(name, neighbors);
broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
for (let neighbor of nest.neighbors) {
if (neighbor == exceptFor) continue;
request(nest, neighbor, "connections", {
name,
neighbors: nest.state.connections.get(name)
});
}
}

everywhere(nest => {
nest.state.connections = new Map;
nest.state.connections.set(nest.name, nest.neighbors);
broadcastConnections(nest, nest.name);
});