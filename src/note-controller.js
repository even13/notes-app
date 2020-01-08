(function(exports) {
  function NoteController(notelist) {
    this.notelistview = new ListViewer(notelist.create("Favourite drink: seltzer"));
  };

  NoteController.prototype.getHTML = function() {
    var htmlstring = this.notelistview.content();
    var app = document.getElementById("app");
    app.innerHTML = htmlstring ;
    console.log(app);
  }

  exports.NoteController = NoteController;
})(this);
