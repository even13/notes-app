(function(exports) {
  function NoteController(list = new List) {
      this.list = list;
    }

    NoteController.prototype.getHTML= function() {
      let viewer = new ListViewer(this.list);
      document.getElementById("notes").innerHTML = viewer.content();
    }

    NoteController.prototype.addNote= function(note) {
      this.list.create(note);
    }

   exports.NoteController = NoteController;
})(this);

noteController = new NoteController();
noteController.addNote("note");
noteController.addNote("note twoo is fun and enjable ill spell everthimg wrong");
noteController.getHTML()
