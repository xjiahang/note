console.log('starting app!');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash')
const notes = require('./note.js');

// command line would be "node app.js read --title accounts"
const argv = yargs.argv;
const command = argv._[0];
console.log("Yargs", argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('add note ', argv.title, 'already exisit in file');
    } else {
        console.log('add note', argv.title, 'success');
        console.log('-----');
        console.log(`Title : ${argv.title}`);
        console.log(`Boday : ${argv.body}`);
    }
} else if (command === 'remove') {
    let removed = notes.removeNote(argv.title);
    let message = removed ? `${argv.title} is removed` : `${argv.title} not found`;
    console.log(message);
} else if (command === 'read') {

} else {
  console.log('Unrecognized command');
}
