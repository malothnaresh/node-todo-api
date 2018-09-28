const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to mongodb server");
  // db.collection("Todos").find({
  //   _id: new ObjectID('5bad98985e775dcefcff9575')
  // }).toArray().then( res => {
  //   console.log("Results are: \n", res);
  // }, err => {
  //   console.log("Unable to find collection Todos");
  // });

  // db.collection("Todos").find().count().then( res => {
  //   console.log("Results are: \n", res);
  // }, err => {
  //   console.log("Unable to find collection Todos");
  // });

  db.collection("Users").find({name: "Maloth Naresh"}).toArray().then( res => {
    console.log(JSON.stringify(res, undefined, 2));
  }, err => {
    console.log("Unabl to fetch Users");
  });
})