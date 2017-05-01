console.log('Starting note.js');

const fs = require('fs');

// input null
// output javascript array
var fetchNote = () => {
    try {
        var notesstring = fs.readFileSync('notes-data.json');
        return JSON.parse(notesstring);
    } catch (e) {
        return [];
    }
}

// notes is javascript array;
var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

//title is string, body is string
var addNote = (title, body) => {
    var notes = [];
    var note = {
      title,
      body
    }

    notes = fetchNote();

    console.log(Array.isArray(notes));
    var duplicateNote = notes.filter((note) => note.title === title);
    if (duplicateNote.length === 0) {
      notes.push(note);
      saveNote(notes);
      return notes;
    }
};

var removeNote = (title) => {
    let notes = fetchNote();
    let filterNote = notes.filter((note) => note.title !== title);
    saveNote(filterNote);

    return notes.length !== filterNote.length;
}

var readNote = (title) => {
    console.log('');
}

module.exports = {
  addNote,
  removeNote
}
