var express = require('express');
var router = express.Router();

let mapMarkerModel = require('../models/mapMarker.model');
let userModel = require('../models/user.model');

/* GET users listing. */
router.get('/markers', function(req, res, next) {

    let query = {};

    if (req.query) {
        if (req.query.email) {
            console.log('has email')
            userModel.find({email:req.query.email})
                .then(doc => {
                    // returning user
                    console.log('doc:');
                    console.log(doc);
                    query['zip'] = doc[0].zip;
                    findMapMarkers(query, function(result) {
                        if (result[0] == true) {
                            return res.json(result[1]);
                        } else {
                            return res.status(500).json(result[1]);
                        }
                    });
                })
                .catch(err => {
                    // error fetching all users
                    return res.status(500).json(err);
                })
        } else {
            findMapMarkers(query, function(result) {
                if (result[0] == true) {
                    return res.json(result[1]);
                } else {
                    return res.status(500).json(result[1]);
                }
            });
        }
    } else {
        findMapMarkers(query, function(result) {
            if (result[0] == true) {
                return res.json(result[1]);
            } else {
                return res.status(500).json(result[1]);
            }
        });
    }

});

function findMapMarkers(query, cb) {
    
    console.log('query:');
    console.log(query);

    mapMarkerModel.find(query)
        .then(doc => {
            // returning all users
            cb([true, doc]); return;
        })
        .catch(err => {
            // error fetching all users
            cb([false, err]); return;
        })
}

module.exports = router;