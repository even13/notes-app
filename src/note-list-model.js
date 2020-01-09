(function(exports) {
  function List() {
    this.notes = [];
  }

  List.prototype.store = function(note) {
    this.notes.push(note)
  }

  List.prototype.create = function(input) {
    note = new Note(input);
    this.notes.push(note);
    console.log(note);
  }

  exports.List = List;
})(this);
