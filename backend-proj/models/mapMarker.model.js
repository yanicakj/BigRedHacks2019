 // libraries, module dependencies, & inclusions
 let mongoose = require('mongoose')

 // defining schema for format of data to be pushed to mongo
 let MapMarkerSchema = new mongoose.Schema({
     lat: {
         type: String,
         required: true
     },
     lng: {
         type: String,
         required: true
     },
     zip: {
        type: String,
         required: true
     },
     creatorName: {
         type: String,
         required: true
     },
     creatorEmail: {
         type: String,
         required: true
     },
     creatorPhone: {
        type: String,
        required: true
     },
     details: {
         type: String,
         required: true
     }
 })
 
 // exposing mongo model schema
 module.exports = mongoose.model('MapMarkers', MapMarkerSchema, 'MapMarkers')