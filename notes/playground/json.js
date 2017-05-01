const fs = require('fs');

var note = {
  title : 'some title',
  body : 'some body'
};

var noteString = JSON.stringify(note);
fs.writeFileSync('notes.json', noteString);

var noteJsonString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteJsonString);
console.log('title', noteObj.title);
