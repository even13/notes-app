var list = new List;
var listviewer = new ListViewer(list);
list.create("another note but this one is longer");

function testViewerHTMLOutput20Char() {
  assert.isTrue(listviewer.content() === '<ul><li><div>another note but th...</div></li></ul>');
};

console.log('testViewerHTMLOutput20Char');
console.log(testViewerHTMLOutput20Char());
