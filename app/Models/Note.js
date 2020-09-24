"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Note extends Model {
  /**
   *  Notes belongs to Organizations
   */
  organization() {
    return this.belongsTo("App/Models/Organization");
  }

  user(){
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Note;
