const express = require('express');
const config = require('./config/environment');
const rootRoutes = require('./routes/root');
const webhookRoutes = require('./routes/webhook');
const healthRoutes = require('./routes/health');

const app = express();

app.use(express.json());
app.use('/', rootRoutes);
app.use('/webhook', webhookRoutes);
app.use('/health', healthRoutes);

app.listen(config.port, () => {
  console.log(`Webhook server listening at http://localhost:${config.port}`);
});