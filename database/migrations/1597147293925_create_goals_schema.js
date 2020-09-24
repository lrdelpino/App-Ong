'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateGoalsSchema extends Schema {
  up () {
    this.create('goals_types', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('goals_types')
  }
}

module.exports = CreateGoalsSchema
