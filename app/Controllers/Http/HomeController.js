"use strict";
const Campaign = use("App/Models/Campaign");
const Organization = use('App/Models/Organization');

class HomeController {
  async index({ view }) {
    const campaign = await Campaign.query().with('organization').last();
    const campaigns = await Campaign.query().with('organization').pickInverse(3);
    const organizations = await Organization.pick(8);
    
    return view.render("index", {
      campaign: campaign.toJSON(),
      campaigns: campaigns.toJSON(),
      organizations: organizations.toJSON(),
    });
  }
}

module.exports = HomeController;
