const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Webhook Server',
    endpoints: {
      '/': 'This documentation (GET)',
      '/webhook': 'Webhook endpoint (POST)',
      '/health': 'Health check endpoint (GET)'
    },
    usage: {
      webhook: {
        method: 'POST',
        url: '/webhook',
        contentType: 'application/json',
        description: 'Triggers n8n workflow with the provided payload'
      }
    }
  });
});

module.exports = router;