// routes/crmRoutes.js
const express = require('express');
const integrationController = require('../controllers/integration-controller');
const { handleOauthCallback } = require('../controllers/oauth-controller');
const router = express.Router();

router.get('/fetch-ticket', integrationController.getTicketData);
router.get('/auth/:platform/callback', handleOauthCallback)

module.exports = router;
