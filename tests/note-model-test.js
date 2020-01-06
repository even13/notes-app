var note = new Note();

function testNoteTextContent() {
  assert.isTrue(note.text === 'My favorite language is Javascript');
};

console.log('testNoteTextContent')
console.log(testNoteTextContent())
