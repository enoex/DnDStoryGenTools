var cayley = require('cayley');
var client = cayley("http://localhost:64210/");

var g = graph = client.graph;
g = graph = client.g;

// Example to get all villains
g.V('http://dbtropes.org/resource/Main/Villains').Out().All(function(err, res){
    console.log(res);
});
