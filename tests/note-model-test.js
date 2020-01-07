var note = new Note();

function testNoteTextContent() {
  assert.isTrue(note.text === 'My favorite language is Javascript');
};

console.log('testNoteTextContent');
console.log(testNoteTextContent());

function testNoteAddText() {
  note.addText("some content");
  assert.isTrue(note.text === "some content");
};

console.log('testNoteAddText');
console.log(testNoteAddText());

function testNoteReadText() {
  assert.isTrue(note.read() === 'some content');
};

console.log('testNoteReadText');
console.log(testNoteReadText());
