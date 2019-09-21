var express = require('express');
var router = express.Router();

let userModel = require('../models/user.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({})
    .then(doc => {
      // returning all users
      return res.json(doc);
    })
    .catch(err => {
      // error fetching all users
      return res.status(500).json(err);
    })
});

// endpoint for new user registration
router.post('/create', function(req, res, next) {
  
  let newUser = new userModel(req.body);

  newUser.save()
    .then(doc => {
      // error creating user
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      // successful user creation
      console.log('Created user!');
      return res.status(201).send(doc);
    })
    .catch(err => {
      // error creating user
      return es.status(500).json(err);
    })

  //let collection = database.collection("Users");
  //console.log("Connected to Users database!");
});

// endpoint to naively validate login
router.post('/login', function(req, res, next) {
  userModel.find({'email':req.body.email, 'password':req.body.password})
    .then(doc => {
      // returning all users
      if (doc.length == 0) {
        return res.status(200).send('false');  
      }
      return res.status(200).send('true');
    })
    .catch(err => {
      // error fetching all users
      return res.status(500).json(err);
    })
});

module.exports = router;
