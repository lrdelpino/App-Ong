"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterNotesSchema extends Schema {
  up() {
    this.alter("notes", (table) => {
      table.dropColumn("expires_at");
    });
  }

  down() {
    this.table("notes", (table) => {
      table.timestamp("expires_at");
    });
  }
}

module.exports = AlterNotesSchema;
