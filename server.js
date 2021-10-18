//                          PSEUDO CODING
// The following HTML routes should be created:
//     GET /notes should return the notes.html file.
//     GET * should return the index.html file.

// The following API routes should be created:
//     GET /api/notes should read the db.json file and return all saved notes as JSON.
//     POST /api/notes should receive a new note to save on the request body, add it to
//         the db.json file, and then return the new note to the client. You'll need to
//         find a way togive each note a unique id when it's saved (look into npm
//         packages that could do this for you).

// Install
//  X    Express.js   

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
//  Require data from db.json
let allNotes = ('./db/db.json');
//  Create port
const PORT = 3001;

// Create var to use express
const app = express();

//  Tell Express to use public folder
app.use(express.static('public'));

//  Create a GET route that returns notes.html.
app.get('/notes', (req, res) => {
    res.sendFile('notes.html');
});

//  Create a GET route named * that returns index.html. 
app.get('*', (req, res) => {
    res.sendFile('index.html');
});
//  Create a GET route named /api/notes that reads db.json and returns all saved notes as JSON
//      Let something === all notes from db.json

//  Create a POST route named /api/notes that recieves new notes and adds it to the db.json
//      return the new note to the client.
//  Will need single source of truth for db.json data
//  JSON.stringify response to append or push into single source of truth
//  Then use fs to rewrite db.json file
//  Reload or re-write html to empty input fields and have newly saved note onto side bar