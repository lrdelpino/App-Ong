'use strict'

const Organization = use('App/Models/Organization');
const Campaign = use("App/Models/Campaign");

class OrganizationsController {

  async index({ request, response, view }) {
    try {
      const page = request.input('page') || 1
      const organizations = await Organization.query().paginate(page, 8);

      return view.render('admin.organization.index', {
        organizations: organizations.toJSON()
      });
    } catch (err) {
      console.log(err)
      return response.redirect('/404');
    }

  }
  async show({ params, request, response, view }) {
    try {
      const organization = await Organization.find(params.id);
      const campaigns = await Campaign.query().with('organization').where('organization_id', params.id).paginate(1, 10);

      return view.render('admin.organization.show', {
        organization: organization.toJSON(),
      })
    } catch (err) {
      console.log(err)
      return response.redirect('/404');
    }
  }
  async create({ request, response, view }) {
    const organizationData = request.only(['name', 'slug', 'image', 'domain', 'description'])

    const organization = await Organization.create(organizationData);

    return organization;
  }
}

module.exports = OrganizationsController
