'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Campaign extends Model {
  /**
   * Date formating
   *
   * @param {string} field
   * @param {string} value
   */
  static castDates(field, value) {
    if (field === 'expires_at') {
      return value.format('YYYY-MM-DD')
    }
    console.log(field, value)
    return super.formatDates(field, value)
  }

  /*static formatDates(field, value) {
    /*if (field === 'createat') {
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, "YYYY-MM-DD hh:mm:ss")
  }*/

  static get dates() {
    console.log(super.dates)
    return super.dates.concat(['expires_at'])
  }

  /**
   * Campaign is related to only one organization
   */
  organization() {
    return this.belongsTo('App/Models/Organization');
  }

  /**
   * This user is the campaign creator
   */
  user() {
    return this.belongsTo('App/Models/User');
  }

  /**
   * Campaign has many goals to achieve
   */
  goals() {
    return this.hasMany('App/Models/Goal');
  }

  /**
   * Many users can
   */
  volunteers() {
    return this
      .belongsToMany('App/Models/User')
      .pivotTable('volunteers');
  }
}

module.exports = Campaign
