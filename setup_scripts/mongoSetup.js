var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Cubert";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    console.log("Database created!")
    db.close();
});


MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("Cubert")
    dbo.createCollection("cubes", function(err, res) {
        if (err) throw err;
        db.close();
    });

    dbo.createCollection("settings", function(err, res) {
        if (err) throw err;
        db.close();
    });

    dbo.createCollection("users", function(err, res) {
        if (err) throw err;
        db.close();
    });
});