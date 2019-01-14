// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const configureMongoose = () => {

  const db = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
  (<any>mongoose).Promise = global.Promise;  // Get Mongoose to use the global promise library
  mongoose.connect(db, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('The Mongoose connection is ready: ', db);
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Problem with the database connection: ${err}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

};

export default configureMongoose;
