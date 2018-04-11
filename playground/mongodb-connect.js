// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
var obj = new ObjectID;
console.log(obj);
// console.log(MongoClient, undefined, 2);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect MongoDB server");
    }
    console.log("Connect to MongoDB server.");

    // db.collection('Todos').insertOne({
    //     text : "show me your drem book",
    //     completed : true
    // }, (err, result)=>{
    //     if(err){
    //         return console.log("Inable to insert", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name : "Nikhil",
    //     age : 23,
    //     location : "ahmedabad"
    // }, (err, result) => {
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.close();

});