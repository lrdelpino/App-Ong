"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Factory = use("Factory");
const Hash = use("Hash");
const Role = use('App/Models/Role')

Factory.blueprint("App/Models/Role", async (faker) => {
    return {
        name: 'admin',
    };
});

Factory.blueprint("App/Models/User", async (faker) => {
  const socialProviders = ["google", "facebook", "default"];
  const roles = await Role.first()

  return {
    first_name: faker.name(),
    last_name: faker.last(),
    provider: faker.pickone(socialProviders),
    image: "https://picsum.photos/seed/picsum/200/200",
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    role_id: roles.id,
  };
});

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })