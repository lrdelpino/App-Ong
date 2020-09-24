'use strict'

/**
 * Goal Validator
 */
class Goal {

  get rules () {
    return {
      expected_amount: 'required|number|above:0',
      campaign_id :'exists:campaigns,id',
      goal_type_id: 'exists:goal_types,id',
      measure_id: 'exists:measures,id'
    }
  }

}

module.exports = Goal
