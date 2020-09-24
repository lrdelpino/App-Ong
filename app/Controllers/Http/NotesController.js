"use strict";

const Note = use("App/Models/Note");

class NoteController {
  async index({ view }) {
    const note = await Note.all();

    return view.render("notes", {
      notes: note.toJSON(),
    });
  }
}

module.exports = NoteController;
