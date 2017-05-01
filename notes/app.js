console.log('starting app!');

const fs = require('fs');
const yargs = require('yargs');

const note = require('./note.js');

// command line would be "node app.js read --title accounts"
const argv = yargs.argv;
const command = argv._[0];
console.log("Yargs", argv);

if (command === 'add') {
    note.addNote(argv.title, argv.body);
} else if (command === 'remove') {

} else if (command === 'read') {

} else {
  console.log('Unrecognized command');
}
