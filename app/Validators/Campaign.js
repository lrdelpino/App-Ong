"use strict";

class Campaign {
  get rules() {
    return {
      title: "required|min:10|max:120",
      expires_at: `after: ${new Date()}`,
    };
  }
}

module.exports = Campaign;
