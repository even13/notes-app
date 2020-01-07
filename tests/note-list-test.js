var list = new List();
var note = new Note();

function testListForEmptyArray() {
  assert.isTrue(list.notes.length === 0);
};

console.log('testListForEmptyArray');
console.log(testListForEmptyArray());

function testListStoresArrayOfNotes() {
  list.store(note);
  assert.isTrue(list.notes.length === 1);
};

console.log('testListStoresArrayOfNotes');
console.log(testListStoresArrayOfNotes());

function testListCreateNote() {
  list.create("another note");
  assert.isTrue(list.notes.length === 2);
};

console.log('testListCreateNote');
console.log(testListCreateNote());
