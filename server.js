var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var rentals = require('./routes/rentalListing.js');
var sales = require('./routes/saleListing.js');

app.use(bodyParser.json()); 
app.use(express.static('public'));

app.use('/rent', rentals);
app.use('/sale', sales);

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);

app.listen(port, function () {
    console.log('Listening on port: ', port);
});
