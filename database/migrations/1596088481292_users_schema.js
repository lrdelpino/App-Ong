'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {

    this.create('organization_user', (table) => {
      table.increments()
      table.integer('organization_id').unsigned().references('id').inTable('organizations')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.datetime('deleted_at').defaultTo(null)
      table.timestamps()
    })

  }

  down () {
    this.drop('organization_user')
  }
}

module.exports = UsersSchema
