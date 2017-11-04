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


module.exports = router;
