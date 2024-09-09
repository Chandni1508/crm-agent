const axios = require('axios');
const { zendeskVariables } = require('./zendesk-variables');

class ZendeskOAuthService {
  getAuthorizationUrl() {
    const clientId = zendeskVariables.clientId;
    const redirectUri = zendeskVariables.redirectUri;
    const scope = 'read write';  // You can customize scopes based on requirements

    return `https://${zendeskVariables.subdomain}.zendesk.com/oauth/authorizations/new?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }

  async getAccessToken(code) {
    const tokenUrl = `https://${zendeskVariables.subdomain}.zendesk.com/oauth/tokens`;
    const clientId = zendeskVariables.clientId;
    const clientSecret = zendeskVariables.clientSecret;
    const redirectUri = zendeskVariables.redirectUri;

    console.log(tokenUrl, clientId, clientSecret,redirectUri,code);

    try {
      const response = await axios.post(tokenUrl, {
        grant_type: 'authorization_code',
        code: code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
      }, 
      {
        headers: {
          'Content-Type': 'application/json'
      }});

      const { access_token } = response.data;
      console.log(`your access_token is  ${access_token}`);
      return access_token;
    } catch (error) {
      console.error('Error obtaining access token:', error.response.data);
      throw new Error('OAuth failed');
    }
  }
}

module.exports = new ZendeskOAuthService();
