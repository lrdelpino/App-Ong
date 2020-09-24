"use strict";

const Note = use("App/Models/Note");

class NoteController {
  async index({ view, request }) {
    const page = request.input('page') || 1;
    const note = await Note.query().orderBy('created_at', 'desc').paginate(page, 10);

    return view.render('admin.notes.index', {
      notes: note.toJSON(),
    });
  }

  create({ request, response, view }) {

    return view.render('admin.notes.create');
  }

  async show({ request, response, view, params }) {
    const note = await Note.find(params.id);
    const user = await Note.query().with('user').last();
    const notes = await Note.pickInverse(5);

    return view.render('admin.notes.show',
      {
        note: note.toJSON(),
        user: user.toJSON().user,
        notes: notes.toJSON()
      });
  }


  async store({ request, response, view, auth, params }) {
    try {
      const user = await auth.getUser()
      const noteInformation = request.only(['title', 'description', 'frase', 'organization_id', 'user_id']);
      const note = await Note.create({ ...noteInformation, user_id: user.id, organization_id: 11 });
      return response.redirect('/admin/notes');
    } catch (err) {
      console.log(err);
      return response.redirect('/404');
    }

  }

  async edit({ request, response, view, auth, params }) {
    const note = await Note.find(params.id);
    return view.render('admin.notes.edit', { note: note.toJSON() });
  }

  async update({ request, response, view, auth, params }) {
    try {
      const note = await Note.findOrFail(params.id);
      note.merge(request.only(['title', 'description', 'frase']));

      note.save();

      return response.redirect(`/admin/notes`)
    } catch (err) {
      return response.redirect('/404');
    }
  }

  async delete({ params, request, response }) {
    const note = await Note.find(params.id);

    await note.delete();

    return response.redirect("/admin/notes");
  }


}

module.exports = NoteController;
