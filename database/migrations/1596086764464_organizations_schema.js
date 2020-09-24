'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrganizationsSchema extends Schema {
  up () {
    this.create('organizations', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.string('image')
      table.string('domain')
      table.text('description')
      table.boolean('visible').defaultTo(true)
      table.string('language').defaultTo('es')
      table.datetime('deleted_at').defaultTo(null)
      table.timestamps()
    })
  }

  down () {
    this.drop('organizations')
  }
}

module.exports = OrganizationsSchema
