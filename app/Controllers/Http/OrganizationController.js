'use strict'

const Organization = use('App/Models/Organization');
const Campaign = use("App/Models/Campaign");

class OrganizationController {
    async index({
        request,
        response,
        view
    }) {
        try {

            const page = request.input('page') || 1
            const organizations = await Organization.query().paginate(page, 8);

            return view.render('organization.index', {
                organizations: organizations.toJSON(),
            });
        } catch (err) {
            console.log(err)
            return response.redirect('/404');
        }

    }


    // devolver vista de organizations.index
    async show({
        params,
        request,
        response,
        view
    }) {
        try {
            const organization = await Organization.find(params.id);
            const campaigns = await Campaign.query().with('organization').where('organization_id', params.id).paginate(1, 10);

            view.render('partials.header', {
                organization: organization.toJSON()
            });
            return view.render('organization.show', {
                organization: organization.toJSON(),
            })
        } catch (err) {
          console.log(err)
            return response.redirect('/404');
        }
    }
    // about_us.html

}

module.exports = OrganizationController
