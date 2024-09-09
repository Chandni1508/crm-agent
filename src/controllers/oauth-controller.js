const IntegrationOauthFactory = require('../integrations/integration-oauth-factory');
// const { saveToken } = require('../utils/tokenUtils');

exports.startOAuth = (req, res) => {
  const { platform } = req.params;
  const oauthService = IntegrationOauthFactory.getService(platform);

  const authorizationUrl = oauthService.getAuthorizationUrl();
  res.redirect(authorizationUrl);
};

exports.handleOauthCallback = async (req, res) => {
  try {
    const { platform } = req.params;
    const { code } = req.query;
    const oauthService = IntegrationOauthFactory.getService(platform);

    const accessToken = await oauthService.getAccessToken(code);
    console.log(accessToken);

    res.json({ message: `${platform} OAuth successful`, token: accessToken });
  } catch (error) {
    res.status(500).json({ message: 'OAuth failed', error: error.message });
  }
};
