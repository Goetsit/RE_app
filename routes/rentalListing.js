var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({rent: Number, sqft: Number, city: String});

var House = mongoose.model('House', HouseSchema, 'rentals');

// GET Route
router.get('/', function(req, res){
    
    House.find({}, function (err, foundRentals) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        }else {
            res.send(foundRentals);
        }
    }); // END FIND
});


//POST Route

router.post('/', function(req, res) {
    console.log(req.body);
    var rentalToAdd = new House(req.body);
    // Mongoose does an insert that is wrapped in a function
    // called save.
    rentalToAdd.save(function(err, data){
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    }); // END SAVE
}); // END POST Route

module.exports = router;
