(function(exports) {
  function List() {
    this.notes = [];
    this.id = 0;
  }

  List.prototype.store = function(note) {
    this.notes.push(note)
  }

  List.prototype.create = function(input) {
    note = new Note(input);
    note.id = this.id;
    this.id ++;
    this.store(note);
    console.log(note);
  }

  exports.List = List;
})(this);
