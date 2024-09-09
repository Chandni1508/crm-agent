const IntegrationFactory = require('../integrations/integration-factory');

const getTicketData = async (req, res) => {
  const { ticketId, platform } = req.query;

  //fetch integration type based on uid

  try {
    const service = IntegrationFactory.getService(platform);
    const userData = await service.fetchTicketDetails(ticketId);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTicketData };

