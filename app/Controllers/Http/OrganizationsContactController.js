'use strict'
const Contact = use('App/Models/Contact');
const Organization = use('App/Models/Organization');

class OrganizationsContactController {
  async create({ request, response, view, params }) {
    const organization = await Organization.find(params.id)
    return view.render('contact', { organization: organization })
  }

  async store({ request, response, view }) {

    const contactInformation = request.only(['name', 'email', 'subject', 'message']);

    const contact = await Contact.create(contactInformation);

    return response.redirect('/');

  }
}

module.exports = OrganizationsContactController
