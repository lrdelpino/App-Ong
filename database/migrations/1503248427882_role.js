'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleSchema extends Schema {
  up () {

    this.create('roles', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description');
      table.datetime('deleted_at').defaultTo(null)
      table.timestamps()
    })


  }

  down () {
    this.drop('roles')
  }
}

module.exports = RoleSchema
