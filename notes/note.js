console.log('Starting note.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
      title,
      body
    }

    try {
       var notesstring = fs.readFileSync('notes-data.json');
       notes = JSON.parse(notesstring);
   } catch (e) {

   }

    console.log(Array.isArray(notes));
    var duplicateNote = notes.filter((note) => note.title === title);
    if (duplicateNote.length === 0) {
      notes.push(note);
      fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var removeNote = (title) => {
    console.log('Remove note', title);
}

var readNote = (title) => {
    console.log('');
}

module.exports = {
  addNote
}
