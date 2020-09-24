"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Goal extends Model {
  campaign() {
    return this.belongsTo("App/Models/Campaign");
  }

  goalType() {
    return this.belongsTo("App/Models/GoalType");
  }

  measure() {
    return this.belongsTo("App/Models/Measure");
  }
}

module.exports = Goal;
