'use strict'

class GoalType {
  get rules() {
    return {
      name: 'required|min:3|max:100',
    }
  }
}

module.exports = GoalType
