//                          PSEUDO CODING
//  X The following HTML routes should be created:
//  X     GET /notes should return the notes.html file.
//  X     GET * should return the index.html file.

//  X   The following API routes should be created:
//      X   GET /api/notes should read the db.json file and return all saved notes as JSON.
//      X   POST /api/notes should receive a new note to save on the request body, add it to
//         the db.json file, and then return the new note to the client. You'll need to
//         find a way togive each note a unique id when it's saved (look into npm
//         packages that could do this for you).
//      X    Install
//          X    Express.js   
//  X   My job
//      X   Create the back end
//      X   Connect the front end to the back

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
//  Variables
const express = require('express');
const path = require('path');
const { readAndAppend } = require('./utils/fsUtils');
const PORT = process.env.PORT || 3001;
const app = express();
let allNotes = require('./db/db.json');

//  Express Routes
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    res.json(allNotes)
});
app.post('/api/notes', (req, res) => {
    if (req.body) {
        readAndAppend(req.body, './db/db.json');
        res.json(`Note added`)
    } else {
        res.error('Error in adding note');
    }
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});