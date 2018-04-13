const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");

const {mongoose} = require("./db/mongoose");
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());
// POST request
app.post('/todo', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err.errors.text.message);
    });
});
// GET request 
app.get('/todo', (req, res) =>{
    Todo.find().then((result) =>{
        res.send({result});
    }, (err) =>{
        res.status(400).send(err);
    })

});

// GET request with Input id
app.get('/todo/:id', (req, res) => {    
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById({_id: id}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});        

    }).catch((e) => {
        res.status(400).send();
    }) 
});


// PORT
app.listen(3000, () => {
    console.log("Started on port 3000");
});