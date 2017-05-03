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
      return note;
    }
};

var removeNote = (title) => {
    let notes = fetchNote();
    let filterNote = notes.filter((note) => note.title !== title);
    saveNote(filterNote);

    return notes.length !== filterNote.length;
}

// input : string title
// output : desired note object
var readNote = (title) => {
    var allNote = fetchNote();
    var note = allNote.filter((note) => note.title == title);
    if (note.length == 0)
        return [];
    else {
        return note[0];
    }
}

var getAll = () => {
    return fetchNote();
}

var logNote = (note) => {
  console.log('----');
  console.log(`Title : ${note.title}`);
  console.log(`Body : ${note.body}`);
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  logNote,
  getAll
}
