const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var title={
  describe:'Title of note',
  demand:true,
  alias:'t'
};
const argv = yargs
.command('add',"Add a new note",{
  title,
  body:{
    describe:"The content of the note",
    demand:true,
    alias:'b'
  }
})
.command('list',"List all the notes")
.command("read","Read a note",{
  title
})
.command("remove","Remove a note",{
  title
})
.help()
.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(typeof note == 'object')
  {
    console.log('Note Added');
    notes.logNotes(note);
  }
  else{
    console.log("Note already exists");
  }
} else if (command === 'list') {
  var allNotes=notes.getAll();
  console.log(`Printing ${allNotes.length} notes`);
  allNotes.forEach((note) => {
    notes.logNotes(note);
  });
} else if (command === 'read') {
  var noteRead=notes.getNote(argv.title);
  if(typeof(noteRead)=="object")
  {
    notes.logNotes(noteRead);
  }
  else{
    console.log("Note Not Found");
  }
} else if (command === 'remove') {
  var val = notes.removeNote(argv.title);
  var msg = val ? "Node removed" : "Note not found";
  console.log(msg);
}
else {
  console.log('Command not recognized');
}
