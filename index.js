//The require function is the preferred method of sharing code between files
var fn = require("./myfile.js");
fn();

var otherfn = require("./test").other; //equivalent to ./test/index.js
otherfn();