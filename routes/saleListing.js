var express = require('express');
var router = express.Router();
// Make sure to Google mongoose when looking for resources
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaleSchema = new Schema({cost: Number, sqft: Number, city: String});

var Sale = mongoose.model('Sale', SaleSchema, 'listings');

// GET Route
router.get('/', function(req, res){
    
    Sale.find({}, function (err, foundSales) {
        if (err) {
            console.log("ERROR! : ", err);
            res.sendStatus(500);
        }else {
            res.send(foundSales);
        }
    }); // END FIND
});


module.exports = router;