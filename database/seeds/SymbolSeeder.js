"use strict";

/*
|--------------------------------------------------------------------------
| SymbolSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Measure = use("App/Models/Measure");

class SymbolSeeder {
  async run() {
    return await Measure.createMany([{
        name: "unidades",
        symbol: "u"
      },
      {
        name: "kilometros",
        symbol: "kms"
      },
      {
        name: "metros",
        symbol: "mts"
      },
      {
        name: "centimetros",
        symbol: "cms"
      },
      {
        name: "milimetros",
        symbol: "mms"
      },
      {
        name: "kilos",
        symbol: "kgs"
      },
      {
        name: "gramos",
        symbol: "grs"
      },
      {
        name: "pesos",
        symbol: "ARS"
      },
      {
        name: "dolares",
        symbol: "U$S"
      },
      {
        name: "horas",
        symbol: "hs"
      },
      {
        name: "metros cuadrados",
        symbol: "m2"
      },
      {
        name: "litros",
        symbol: "lts"
      },
      {
        name: "mililitros",
        symbol: "mls"
      },
      {
        name: "metro cubico",
        symbol: "m3"
      },
      {
        name: "centimetro cubico",
        symbol: "cm3"
      },
    ]);
  }
}

module.exports = SymbolSeeder;
