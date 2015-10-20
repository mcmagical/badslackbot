// Generated by CoffeeScript 1.10.0
(function() {
  var exports, getUserName, isNumeric, slack;

  slack = require('../slackClient');

  isNumeric = require('./isNumeric');

  getUserName = function(userId) {
    var user;
    user = slack.getUserByID(userId);
    if (!user) {
      return false;
    }
    return user.name;
  };

  exports = this;

  exports.getUserName = getUserName;

}).call(this);
