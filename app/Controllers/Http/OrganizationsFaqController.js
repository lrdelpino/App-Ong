'use strict'
const Organization = use('App/Models/Organization');

class OrganizationsFaqController {
  async index({ params, view }) {
    let organizationId = params.id
    const organization = await Organization.find(organizationId);

    return view.render('faq',{organization: organization});
  }
}

module.exports = OrganizationsFaqController

