'use strict'
const Faq = use('App/Models/Faq')
class FaqController {
  async index({ request, response, view }) {
    const faqs = await Faq.all();

    return view.render('admin.faq.faq', {
      faqs: faqs.toJSON()
    })
  }

  create({ request, response, view }) {
    return view.render('admin.faq.create');
  }

  async store({ request, response, view, auth }) {
    try {
      const user = await auth.getUser();
      const faqInformation = request.only(['title', 'description', 'organization_id', 'user_id']);
      const contact = await Faq.create({ ...faqInformation, user_id: user.id, organization_id: 11 });
      return response.redirect('/admin');
    } catch (err) {
      console.log(err);
      return response.redirect('/404');
    }

  }

  async edit({ request, response, view, auth, params }) {
    const faq = await Faq.find(params.id);
    return view.render('admin.faq.edit', { faq: faq.toJSON() });
  }

  async update({ request, response, view, auth, params }) {
    try {
      const faq = await Faq.findOrFail(params.id);
      faq.merge(request.only(['title', 'description']));
      faq.save();
      return response.redirect('/admin/faqs');
    } catch (err) {
      console.log(err);
      return response.redirect('/404');
    }
  }

  async delete({ request, response, view, auth, params }){
    const faq = await Faq.find(params.id);
    await faq.delete();

    return response.redirect("/admin/faqs");
  }
}

module.exports = FaqController
