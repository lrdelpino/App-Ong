'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Measure extends Model {
  static get table() {
    return 'measures_types'
  }

  goals() {
    return this.hasMany('App/Models/Goal');
  }
}

module.exports = Measure
