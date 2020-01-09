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
