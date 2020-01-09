function testSingleNoteView() {
  var note3 = new Note('whatever');
  console.log(note3.text);
  var singlenoteview = new SingleNoteView(note3.text);
  console.log(singlenoteview.HTML());
  assert.isTrue(singlenoteview.HTML() === '<div> whatever </div>')
}

console.log('testSingleNoteView');
console.log(testSingleNoteView());
