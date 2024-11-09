const fetch = require('node-fetch');
const config = require('../config/environment');

class N8nService {
  async triggerWebhook(payload) {
    const response = await fetch(config.n8n.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-N8N-API-KEY': config.n8n.apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`n8n webhook failed: ${response.statusText}`);
    }

    return response.json();
  }
}

module.exports = new N8nService();