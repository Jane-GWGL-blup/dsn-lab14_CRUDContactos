const mongoose = require('mongoose');

/*const MONGO_USERNAME = 'mongonc';
const MONGO_PASSWORD = 'mongo';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'procuctsv1';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
*/
const  url  =  `mongodb+srv://admin:Root1990@cluster0.umfobrr.mongodb.net/?retryWrites=true&w=majority` ;

mongoose.connect(url);