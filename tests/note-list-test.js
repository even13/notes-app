function testListForEmptyArray() {
  var list = new List();
  var note = new Note('this note');
  assert.isTrue(list.notes.length === 0);
};

console.log('testListForEmptyArray');
console.log(testListForEmptyArray());

function testListStoresArrayOfNotes() {
  var list = new List();
  var note = new Note('this note');
  list.store(note);
  assert.isTrue(list.notes.length === 1);
};

console.log('testListStoresArrayOfNotes');
console.log(testListStoresArrayOfNotes());

function testListCreateNote() {
  var list = new List();
  var note1 = new Note('this note');
  list.store(note1);
  list.create("another note");
  console.log(list.notes);
  assert.isTrue(list.notes.length === 2);
};

console.log('testListCreateNote');
console.log(testListCreateNote());

function testNoteHasID() {
  var list = new List();
  list.create("new note");
  assert.isTrue(list.notes[0].id === 0)
  console.log(list.notes[0].id)
  list.create("second note")
  assert.isTrue(list.notes[1].id === 1)
  console.log(list.notes[1].id)
};

console.log('testNoteHasID');
console.log(testNoteHasID());
