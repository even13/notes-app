function testNoteControllerCanBeInstantiated() {
  var list = new List();
  var notecontroller = new NoteController(list);
  assert.isTrue(notecontroller instanceof NoteController)
};

console.log('testNoteControllerCanBeInstantiated');
console.log(testNoteControllerCanBeInstantiated());

function testAppElementContainsText() {
  function ListDouble() {};
  ListDouble.prototype = {
    create: function() {};
  };
  var list = new ListDouble;
  var notecontroller = new NoteController(list);
  notecontroller.getHTML();
  var app = document.getElementById('app');

}

console.log('testAppElementContainsText');
console.log(testAppElementContainsText());
