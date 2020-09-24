'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaqsSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.string("title").notNullable();
      table.text("description").notNullable();
      table.integer('organization_id').unsigned().notNullable();
      table.integer('user_id').unsigned().notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqsSchema
