function testNoteControllerCanBeInstantiated() {
  var list = new List();
  var notecontroller = new NoteController(list);
  assert.isTrue(notecontroller instanceof NoteController)
};

console.log('testNoteControllerCanBeInstantiated');
console.log(testNoteControllerCanBeInstantiated());

function testAppElementContainsText() {
  
}

console.log('testAppElementContainsText');
console.log(testAppElementContainsText());
