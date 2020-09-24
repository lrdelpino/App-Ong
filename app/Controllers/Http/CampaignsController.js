'use strict'
const Campaign = use("App/Models/Campaign");

class CampaignsController {
  async index({ request, response, view, params }) {
    try {
      const page = request.input('page') || 1
      let campaigns = await Campaign.query().with('organization').paginate(page, 6);
      let organizationId = params.id

      if (organizationId) {
        campaigns = await Campaign.query().with('organization').where('organization_id', organizationId).paginate(page, 6);
      }
      let lastCampaign = campaigns.last().toJSON();
      return view.render('campaigns.index', {
        campaigns: campaigns.toJSON(),
        lastCampaign: lastCampaign,
        organization: lastCampaign.organization
      });
    } catch (err) {
      console.log(err);
      return response.redirect('/404');
    }
  }
  async show({ request, response, params: { id }, view }) {
    try {
      const campaign = await Campaign.query().with('organization').where('id', id).first();

      return view.render('campaigns.show', {
        campaign: campaign,
        template: {
          id: 'campaign-detail'
        }
      })
    } catch (err) {
      console.log(err)
      return response.redirect('/404')
    }
  }
}

module.exports = CampaignsController
