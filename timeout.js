//Node.js concurrency and event loop fundamentals

setTimeout(function() { //registers event handler which gets called on the next iteration of the event loop(asynchronous code); if there is a callback, it's asynchronous
	console.log("In timeout!");
}, 0);

console.log("Not in timeout!"); //gets printed in the current iteration of the event loop(synchronous code)

//Which runs first?