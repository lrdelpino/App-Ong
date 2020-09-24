"use strict";

const User = use("App/Models/User");
const UserRepository = use("App/Repositories/UsersRepository");

class UsersController {
  /**
   *list all the users, 10 per page
   * search users for name, last name and email
   * @param {*} param0
   */
  async index({
    request,
    response,
    view
  }) {
    let users = await UserRepository.search(request)
      .active()
      .latest()
      .paginate(request.input('page'), 10);

    return view.render('users.list', {
      users: users.toJSON(),
    });
  }

  /**
   * find by Id an user and returned just the data that can be edited
   */
  async edit({
    request,
    params: {
      id
    },
    response,
    view
  }) {
    const user = await User.find(id);

    return view.render("users.edit", {
      user
    });
  }

  /**
   * Display a single user.
   * GET /admin/users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({
    params,
    request,
    response,
    view
  }) {
    try {
      const user = await User.findOrFail(params.id);
      return view.render('users.show', {
        user
      })
    } catch (err) {
      return response.redirect('/404');
    }
  }

  /*
   * Change user information
   * @param {*} param0
   */
  async update({
    request,
    params: {
      id
    },
    response
  }) {
    try {
      const user = await User.findOrFail(id);

      user.merge(request.only(['first_name', 'last_name', 'username']))

      user.save()

      return response.redirect(`/admin/users/${user.id}`)
    } catch (err) {
      return response.redirect('/admin/users');
    }
  }

  /**
   * Delete with id.
   * DELETE /admin/users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({
    params,
    request,
    response
  }) {
    const user = await User.find(params.id);

    await user.delete();

    return response.redirect("/admin/users");
  }

  async logout({ auth, request, response }){
    try{
      await auth.logout();
      return response.redirect("/");
    }catch(err){
      console.log(err);
    }

  }
}

module.exports = UsersController;
