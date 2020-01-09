(function(exports) {
  function SingleNoteView(note) {
    this.note = new Note(note);
  }

  SingleNoteView.prototype.HTML = function(){
    return `<div> ${this.note.text} </div>`
  }

  exports.SingleNoteView = SingleNoteView;
})(this)
