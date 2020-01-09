function testViewerHTMLOutput20Char() {
  var list = new List;
  var listviewer = new ListViewer(list);
  list.create("another note but this one is longer");
  assert.isTrue(listviewer.content() === '<ul><li><div><a href="#note/0">another note but th...</a></div></li></ul>');
};

console.log('testViewerHTMLOutput20Char');
console.log(testViewerHTMLOutput20Char());
