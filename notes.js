
const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString=fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes=fetchNotes();
  var note={
    title,
    body
  };
var duplicateNotes=notes.filter((note) => {
  return note.title == title;
});

if (duplicateNotes.length==0){
  notes.push(note);
  saveNotes(notes);
  return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  notes=fetchNotes();
  for (note of notes) {
    if(note.title===title){
      return {title:note.title,body:note.body};
  }
}
return false;
};

var removeNote = (title) => {
  var notes=fetchNotes();
  var newNotes=notes.filter((note) => {
    return note.title!=title;
  });
  saveNotes(newNotes);
  return notes.length!==newNotes.length;
};

var logNotes = (note) =>{
  debugger;
  console.log("---");
  console.log('Title:',note.title);
  console.log('Body:',note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNotes
};
