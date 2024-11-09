require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  n8n: {
    webhookUrl: 'https://pwalsh.app.n8n.cloud/webhook-test/dccc9da3-ce2e-4463-bfcc-373321dce2bb',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZWNlNzJiYy02MWYzLTQ2YTItYjk3Ni01OTAyYmFlYzc5MjkiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzMxMTg1MDc1fQ.w4cbjIbqWaedGxcGJsc-LRXZOn8oeBVzvF0zflF8hgU'
  }
};

module.exports = config;