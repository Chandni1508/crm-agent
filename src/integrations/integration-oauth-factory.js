// src/services/oauth/platformOAuthFactory.js

const ZendeskOAuthService = require('./zendesk/zendesk-oauth');

class IntegrationOauthFactory {
  static getService(platform) {
    switch (platform) {
      case 'zendesk':
        return ZendeskOAuthService;
      default:
        throw new Error('Unsupported platform');
    }
  }
}

module.exports = IntegrationOauthFactory;
