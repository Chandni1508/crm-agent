const ZendeskService = require('./zendesk/zendesk-service');

class IntegrationFactory {
  static getService(platform) {
    switch (platform) {
      case 'zendesk':
        return new ZendeskService();
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }
}

module.exports = IntegrationFactory;
