console.log('starting app!');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash')
const notes = require('./note.js');

// command line would be "node app.js read --title accounts"
const titleOptions = {
  describe : 'title of note',
  demand : true,
  alias : 't'
};

const bodyOptions = {
  describe : 'body of note',
  demand : true,
  alias : 'b'
};

const argv = yargs
.command('add', 'add a note', {
    title : titleOptions,
    body : bodyOptions
})
.command('list', 'list all notes')
.command('read', 'read a note', {
  title : titleOptions
})
.command('remove', 'remove a note', {
  title : titleOptions
})
.help()
.argv;
const command = argv._[0];
console.log("Yargs", argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('add note ', argv.title, 'already exisit in file');
    } else {
        console.log('add note', argv.title, 'success');
        notes.logNote(note);
    }
} else if (command === 'remove') {
    let removed = notes.removeNote(argv.title);
    let message = removed ? `${argv.title} is removed` : `${argv.title} not found`;
    console.log(message);
} else if (command === 'read') {
    let note = notes.readNote(argv.title);
    if (_.isUndefined(note)) {
        console.log(`${argv.title} not found!`);
    } else {
        notes.logNote(note);
    }
} else if (command === 'list') {
    let allNote = notes.getAll();
    allNote.forEach((note) => notes.logNote(note));
} else {
    console.log('Unrecognized command');
}
