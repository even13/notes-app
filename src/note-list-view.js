(function(exports) {
  function ListViewer(list = new List) {
    this.list = list;
  };

  ListViewer.prototype.content = function() {
    var array = this.list.notes.map(
      note => `<li><div><a href="#note/${note.id}">${note.read().substring(0, 19)}...</a></div></li>`
    );
    let content = array.join("");
    return "<ul>" + content + "</ul>";
  };



  exports.ListViewer = ListViewer;
})(this);
