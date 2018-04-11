 // const MongoClient = require("mongodb").MongoClient;
 const {MongoClient, ObjectID} = require("mongodb");

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
         return console.log("Unable to connect MongoDB server");
     }
     console.log("Connect to MongoDB server.");
    //  delete many
    //  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //      console.log(result); 
    //  });

    //  delete one
    //  db.collection('Todos').deleteOne({text: 'show me your drem book'}).then((result) => {
    //     console.log(result); 
    // });

    // find one and delete
    // db.collection("Todos").findOneAndDelete({completed: 'Yes'}).then((result) => {
    //     console.log(result);
    // });
 
     db.close();
 
 });