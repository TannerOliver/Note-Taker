const express = require('express');
const app = express();
let allNotes = require("../db/db.json");
const { readAndAppend, readFromFile } = require("../utils/fsUtils");

app.get('/', (req, res) => {
    // readFromFile form utils
    // respond with data from readFromFile
    // readAndAppend(res.json(allNotes));
    res.json(allNotes);
})

app.post('/', (req, res) =>{
    if (req.body) {
        readAndAppend(req.body, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.json('Error, cannot add note');
    }
});

module.exports = app;