"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SymbolSchema extends Schema {
  up() {
    this.alter("measures_types", (table) => {
      table.string("symbol", [4]).notNullable();
    });
  }

  down() {
    this.table("measures_types", (table) => {
      table.dropColumn("symbol");
    });
  }
}

module.exports = SymbolSchema;
