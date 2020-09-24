'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateMeasuresSchema extends Schema {
  up () {
    this.create('measures_types', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('measures_types')
  }
}

module.exports = CreateMeasuresSchema
