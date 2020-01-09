(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.addText = function(input) {
    this.text = input
  }

  Note.prototype.read = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);
