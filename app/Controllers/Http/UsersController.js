"use strict";

const User = use("App/Models/User");
const Hash = use('Hash')
const { validate } = use('Validator')

class UsersController {
  async index({ view }) {
    return view.render("users.login");
  }

  async create({ view }) {
    return view.render("users.register");
  }

  async store({ request, response, view, auth }) {
    try {
      const userData = request.only([
        "first_name",
        "last_name",
        "username",
        "email",
        "password",
      ]);

      const user = await User.create(userData);
      auth.login(user)

      return response.redirect("/admin/users");
    } catch (err) {
      console.log(err)
      return response.redirect("/404");
    }
  }

  async login({ auth, request, response, session }) {
    const rules = {
      email: 'required|email|exists:users,email',
      password: 'required'
    }

    let validation = await validate(request.all(), rules, {
      'email.exists': 'El email no se encuentra registrado',
      'email.email': 'El email no es valido',
      'email.required': 'El email es requerido',
      'password.required': 'El password es requerido',
    })

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        .flashExcept(['password'])

      return response.redirect('back')
    }

    let user = await auth.attempt(
      request.input('email'), request.input('password')
    );

    user.merge({ 'last_login': new Date })
    user.save()

    return response.redirect("/admin");
  }

  
}

module.exports = UsersController;
