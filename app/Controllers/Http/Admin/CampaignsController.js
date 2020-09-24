"use strict";

const Campaign = use("App/Models/Campaign");
const ValidateCampaign = use("App/Validators/Campaign");
const Organization = use("App/Models/Organization");
class CampaignController {
  /**
   * List all campaigns
   */
  async index({
    request,
    response,
    view
  }) {
    const campaigns = await Campaign.all();

    return view.render('admin.campaigns.index', {
      campaigns: campaigns.toJSON(),
    });
  }

  /**
   * Display campaign details.
   *
   */

  async show({ request, response, params: { id }, view }) {
    try {
      const campaign = await Campaign
        .query()
        .with('goals').with('goals.goalType').with('goals.measure')
        .where('id', id)
        .first()

      return view.render('campaigns.show', {
        campaign: campaign.toJSON(),
      });
    } catch (err) {
      return response.redirect('/404');
    }
  }

  /**
   *  Create a new Campaign
   * @param {*} param0
   */
  async create({ request, response, view }) {
    try {
      let organizations = await Organization.all();
      console.log(organizations.toJSON());
      return view.render('campaigns.create', { organizations: organizations.toJSON() })
    } catch (err) {
      console.log(err)
    }
  }


  async store({ request, response, view, auth }) {
    const user = await auth.getUser();
    const campaignData = request.only(['title', 'description', 'expires_at', 'organization_id', 'image_url']);

    const campaign = await Campaign.create({ ...campaignData, user_id: user.id });
    console.log(campaign);
    return response.redirect('/admin/campaigns');
  }


  /*
   * Change campaign information
   * @param {*} param0
   */
  async update({
    request,
    params: {
      id
    },
    response
  }) {
    try {
      const campaign = await Campaign.findOrFail(id);

      campaign.merge(request.only(['title', 'description', 'expires_at']));

      campaign.save();

      return response.redirect(`/admin/campaigns/${campaign.id}`)
    } catch (err) {
      return response.redirect('/404');
    }
  }

  /**
   * Delete Campaign by ID
   */
  async delete({
    request,
    params: {
      id
    },
    response
  }) {
    const campaign = await Campaign.find(id);

    await campaign.delete();

    return response.redirect("/admin/campaigns");
  }

  /**
   * find by campaign by ID and returned just the data that can be edited
   */
  async edit({
    request,
    params: {
      id
    },
    response,
    view
  }) {
    const campaign = await Campaign.find(id);

    return view.render("campaigns.edit", {
      campaign
    });
  }
}

module.exports = CampaignController;

