(function(exports) {
  function ListViewer(list = new List) {
    this.list = list;
  };

  ListViewer.prototype.content = function() {
    var array = this.list.notes.map(
      note => `<li><div>${note.read().substring(0, 19)}...</div></li>`
    );
    let content = array.join("");
    return "<ul>" + content + "</ul>";
  };

  exports.ListViewer = ListViewer;
})(this);
