//                          PSEUDO CODING
//  X The following HTML routes should be created:
//  X     GET /notes should return the notes.html file.
//  X     GET * should return the index.html file.

// The following API routes should be created:
//     GET /api/notes should read the db.json file and return all saved notes as JSON.
//     POST /api/notes should receive a new note to save on the request body, add it to
//         the db.json file, and then return the new note to the client. You'll need to
//         find a way togive each note a unique id when it's saved (look into npm
//         packages that could do this for you).

// Install
//  X    Express.js   
// remove this if you see it
// My job
//     Create the back end
//     Connect the front end to the back

// Acceptance Criteria   
//     GIVEN a note-taking application
//     WHEN I open the Note Taker
//     THEN I am presented with a landing page with a link to a notes page
//     WHEN I click on the link to the notes page
//     THEN I am presented with a page with existing notes listed in the
//         left-hand column, plus empty fields to enter a new note title and the 
//         note’s text in the right-hand column
//     WHEN I enter a new note title and the note’s text
//     THEN a Save icon appears in the navigation at the top of the page
//     WHEN I click on the Save icon
//     THEN the new note I have entered is saved and appears in the left-hand
//         column with the other existing notes
//     WHEN I click on an existing note in the list in the left-hand column
//     THEN that note appears in the right-hand column
//     WHEN I click on the Write icon in the navigation at the top of the page
//     THEN I am presented with empty fields to enter a new note title and the
//         note’s text in the right-hand column

// When Done
//     Commit to GitHub
//     Commit to Heroku

// EXTRA
//     You haven’t learned how to handle DELETE requests, but this application offers
//         that functionality on the front end. As a bonus, try to add the DELETE route
//         to the application using the following guideline:
//             ~ DELETE /api/notes/:id should receive a query parameter that contains
//                 the id of a note to delete. To delete a note, you'll need to read
//                 all notes from the db.json file, remove the note with the given id
//                 property, and then rewrite the notes to the db.json file.
////////////////////////////////////////////////////////////////////////////////////////
//  Require Express
const express = require('express');
//  Require FS
const fs = require('fs');
//  Require path
const path = require('path');
//  Require data from db.json
let allNotes = require('./db/db.json');
//  Create port
const PORT = process.env.PORT || 3001;
// Create var to use express
const app = express();
//  Tell Express to use public folder *not really sure if I need to use static express method*
app.use(express.static('public'));
//  In boiler forgot what this does
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  Create a GET route that returns notes.html.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));           // *I don't think I need to change this anymore*
});
//  Create a GET route named /api/notes that reads db.json and returns all saved notes as JSON
//      Let something === all notes from db.json
app.get('/api/notes', (req, res) => {
    res.json(path.join(__dirname, 'db.json')); // I did path.join here and I am not sure if I need it since im using res.json
});
//  X  Create a POST route named /api/notes that recieves new notes and adds it to the db.json
//         return the new note to the client.
//  X  Define var for res
//  X  Will need single source of truth for db.json data       I think I did this with allNotes in global scope
//  X  JSON.stringify response to append or push into single source of truth
//  X  Then use fs to rewrite db.json file
//  Reload or re-write html to empty input fields and have newly saved note onto side bar
app.post('/api/notes', (req, res) => {
    // var for res
    let resp = res;
    //  pushing resp into allNotes
    allNotes = allNotes.push(resp);
    //  Using FS to re-write db.json and putting stringified allNotes into it
    fs.writeFile('db.json', JSON.stringify(allNotes), (err) => {
        err ? console.error(err) : console.log('File has been writen');
    });
});
//  Create a GET route named * that returns index.html. 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));       //  * I don't think I need to change this anymore.*
});
//  Create a LISTEN to tell which port we are listening on
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});