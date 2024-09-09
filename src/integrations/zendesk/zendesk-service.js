const axios = require('axios');
const IntegrationService = require('../integration-service');
const { zendeskVariables } = require('./zendesk-variables');

class ZendeskService extends IntegrationService {
  async fetchTicketDetails(ticketId) {
    const response = await axios.get(`https://${zendeskVariables.subdomain}.zendesk.com//api/v2/tickets/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${zendeskVariables.accessToken}`,
      },
    });
    return this.mapFields(response.data);
  }

  mapFields(data) {
    return {
      title: data.ticket.subject,
      description: data.ticket.description,
      created_date: data.ticket.created_at,
      created_by: data.ticket.requester_id,
    };
  }
}

module.exports = ZendeskService;
