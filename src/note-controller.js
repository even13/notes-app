(function(exports) {
  function NoteController(list = new List) {
      this.list = list;
    }

    NoteController.prototype.getHTML= function() {
      let viewer = new ListViewer(this.list);
      document.getElementById("app").innerHTML = viewer.content();
    }
   exports.NoteController = NoteController;
})(this);
