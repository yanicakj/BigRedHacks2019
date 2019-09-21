const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
//const CONNECTION_URL = "mongodb+srv://HackathonUser:Cornell123@cornellcluster-yzopz.gcp.mongodb.net/test?retryWrites=true";
//const DATABASE_NAME = "Hackathon";

// libraries, dependencies, & inclusions
let mongoose = require('mongoose');
let app = require('./app');

// connection string specifications
const server = 'mongodb+srv://HackathonUser:Cornell123@cornellcluster-yzopz.gcp.mongodb.net';
let database = 'Hackathon';

// connecting to mongo database via mongoose
//const options = { user: 'HackathonUser', pass: 'Cornell123' };
//const dbConn = mongoose.connect('mongodb://localhost', options);
//module.exports = mongoose.connect(`mongodb+srv://${server}/${database}`);
module.exports = mongoose.connect(`${server}/${database}`);