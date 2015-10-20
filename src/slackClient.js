// Generated by CoffeeScript 1.10.0
(function() {
  var Slack, autoMark, autoReconnect, config, slack, slackToken;

  Slack = require('slack-client');

  config = require('./config');

  slackToken = config.botApiToken;

  autoReconnect = true;

  autoMark = true;

  slack = new Slack(slackToken, autoReconnect, autoMark);

  module.exports = slack;

}).call(this);
