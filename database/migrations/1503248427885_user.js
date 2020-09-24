"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("image").defaultTo(null);
      table.string("username").notNullable().unique();
      table.string("access_token").unique().defaultTo(null);
      table.string("provider").defaultTo(null);
      table.string("email").notNullable().unique();
      table.string("password", 60);
      table.datetime("last_login").defaultTo(null);
      table.integer("role_id").unsigned().references("id").inTable("roles");
      table.datetime("deleted_at").defaultTo(null);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
