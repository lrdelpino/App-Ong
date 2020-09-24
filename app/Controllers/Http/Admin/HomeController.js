"use strict";

class HomeController {
  async index({ request, response, view }) {
    return view.render("admin.index");
  }
}

module.exports = HomeController;
