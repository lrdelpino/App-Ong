'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserOrganization extends Model {

  static get table() {
    return 'organization_user'
  }

  user() {
    return this.hasMany('App/Models/User')
  }
}


module.exports = UserOrganization
