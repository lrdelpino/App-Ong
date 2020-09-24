'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateVolunteersSchema extends Schema {
  up () {
    this.create('volunteers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('campaign_id').unsigned().notNullable()
      table.text('comments')
      table.timestamps()
      table.timestamp('deleted_at')

      table.foreign('user_id').references('id').inTable('users')
      table.foreign('campaign_id').references('id').inTable('campaigns')
    })
  }

  down () {
    this.drop('volunteers')
  }
}

module.exports = CreateVolunteersSchema
