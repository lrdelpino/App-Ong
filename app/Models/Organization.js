"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Organization extends Model {
  static boot() {
    super.boot();

    this.addTrait("@provider:Lucid/SoftDeletes");
    this.addHook("beforeSave", async (organizationInstance) => {
      if (organizationInstance.dirty.name) {
        organizationInstance.slug = organizationInstance.dirty.name
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
      }
    });
  }

  users() {
    return this.belongsToMany("App/Models/User");
  }
}

module.exports = Organization;
