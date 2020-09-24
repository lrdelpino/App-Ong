'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentsSchema extends Schema {
  up () {
    this.create('coments', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('coments')
  }
}

module.exports = ComentsSchema
