'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateGoalsSchema extends Schema {
  up () {
    this.create('goals', (table) => {
      table.increments()
      table.integer('campaign_id').unsigned().notNullable()
      table.integer('goal_type_id').unsigned().notNullable()
      table.integer('measure_id').unsigned().notNullable()
      table.float('expected_amount').unsigned().notNullable()
      table.float('remaining_amount').unsigned().default(0)
      table.float('reached_amount').unsigned().default(0)
      table.timestamp('achieved_at')
      table.timestamps()
      table.timestamp('deleted_at')

      table.foreign('campaign_id').references('id').inTable('campaigns')
      table.foreign('goal_type_id').references('id').inTable('goals_types')
      table.foreign('measure_id').references('id').inTable('measures_types')
    })
  }

  down () {
    this.drop('goals')
  }
}

module.exports = CreateGoalsSchema
