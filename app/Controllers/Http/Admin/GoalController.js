'use strict'

const {
  query
} = use("App/Models/Campaign");

const Goal = use("App/Models/Goal");

class GoalController {

  async index({
    request,
    response,
    view
  }) {
    let goals = await Goal.query();
    let campaignId = request.input('campaign_id');

    if (campaignId) {
      goals.where('campaign_id', campaignId);
    }

    let type = request.input('type');
    let reached = request.input('reached')

    if (type) {
      query.where('id', '=', type);
    }

    if (reached) {
      reached == 'false' ? query.whereNull('achieved_at') : query.whereNotNull('achieved_at');
    }

    return query.fetch()
  }

  async create({
    request,
    response,
    view
  }) {
    const goalData = request.only([
      'campaign_id', 'goal_type_id', 'measure_id',
      'expected_amount', 'reached_amount', 'achieved_at', 'deleted_at'
    ]);

    const user = await User.create(goalData);

    return user;
  }

  async show({
    params,
    request,
    response,
    view
  }) {
    try {
      const goal = await Goal.findOrFail(params.id);
      return goal;
    } catch (err) {
      return response.redirect('/404');
    }
  }

  async update({
    params: {
      id
    },
    request,
    response,
    view
  }) {
    const goal = await Goal.findByOrFail(id);

    const data = request.only([
      'campaign_id', 'goal_type_id', 'measure_id',
      'expected_amount', 'reached_amount', 'achieved_at', 'deleted_at'
    ]);

    user.merge(data);

    await user.save();
  }

  async delete({
    request,
    params: {
      id
    },
    response,
    view
  }) {
    const goal = await Goal.findOrFail(id);
    await user.delete();
  }
}

module.exports = GoalController
