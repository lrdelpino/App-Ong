'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCampaignsSchema extends Schema {
  up () {
    this.create('campaigns', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('organization_id').unsigned().notNullable()
      table.string('title').notNullable()
      table.text('description')
      table.string('image_url')
      table.timestamp('expires_at')
      table.timestamps()
      table.timestamp('deleted_at').nullable()

      table.foreign('user_id').references('id').inTable('users');
      table.foreign('organization_id').references('id').inTable('organizations');
    })
  }

  down () {
    this.drop('campaigns')
  }
}

module.exports = CreateCampaignsSchema
