const express = require('express');
const n8nService = require('../services/n8nService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await n8nService.triggerWebhook(req.body);
    res.json({
      success: true,
      message: 'Webhook processed successfully',
      n8nResponse: result
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process webhook',
      error: error.message
    });
  }
});

module.exports = router;