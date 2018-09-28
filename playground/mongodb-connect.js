// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");

  // db.collection('Todos').insertOne({
  //   test: 'Wake up at 5:30 AM',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert todo ", err);
  //   }

  //   console.log("Succesfully inserted data ", JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Maloth Naresh",
  //   age: "27",
  //   location: "Hyderabad"
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert to Users ", err);
  //   }    
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
})