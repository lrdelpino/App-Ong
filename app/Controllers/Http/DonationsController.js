"use strict";

class DonationController {
  async index({ view }) {
    return view.render("donate");
  }
}

module.exports = DonationController;
