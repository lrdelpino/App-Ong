"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class GoalType extends Model {
  static get table() {
    return 'goals_types'
  }

  goals() {
    return this.hasMany("App/Models/Goal");
  }
}

module.exports = GoalType;
