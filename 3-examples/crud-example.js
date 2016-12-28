//require function breaks up large projects into small managable files
var mongodb = require("mongodb");

var uri = "mongodb://localhost:27017/example";
//Connect to mongodb; callbacks are functions you provide to the Node.js driver to specify what to do once a given operation completes (will learn more in Node.js concurrency lesson)
mongodb.MongoClient.connect(uri, function(error, db) { //error is returned first or is null
	if (error) {
		console.log(error);
		process.exit(1);
	}

	var doc = {
		title: "Jaws",
		year: 1975,
		director: "Steven Spielberg",
		rating: "PG"
	}

	db.collection("movies").insert(doc, function(error, result) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		//The toArray() method returns an array that contains all the documents from a cursor. The method iterates completely the cursor, loading all the documents into RAM and exhausting the cursor.
		//Cursor: A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity. 
		db.collection("movies").find().toArray(function(error, docs) {
			if (error) {
				console.log(error);
				process.exit(1);
			}
		///////////////////////alternate example////////////////////////
		// var query = {year: 1975, rating: "PG"};
		// db.collection("movies").find(query).toArray(function(error, docs) {
		// 	if (error) {
		// 		console.log(error);
		// 		process.exit(1);
		// 	}
		////////////////////////////////////////////////////////////////
			console.log("Found docs:");
			docs.forEach(function(doc) {
				//The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
				console.log(JSON.stringify(doc));
			});
			process.exit(0); 
		});
	});
});
