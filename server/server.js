const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

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

app.get('/todo', (req, res) =>{
    Todo.find().then((result) =>{
        res.send({result});
    }, (err) =>{
        res.status(400).send(err);
    })

});

app.listen(3000, () => {
    console.log("Started on port 3000");
});