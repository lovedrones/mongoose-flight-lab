var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/flights",
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

var db = mongoose.connection;

db.on('connect', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});