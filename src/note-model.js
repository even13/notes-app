(function(exports) {
  function Note() {
    this.text = 'My favorite language is Javascript'
  }

  Note.prototype.addText = function(input) {
    this.text = input
  }

  Note.prototype.read = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);
