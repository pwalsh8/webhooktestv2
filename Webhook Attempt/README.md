# Webhook Server

A Node.js webhook server that receives Phantombuster webhooks and forwards them to N8N.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file with required environment variables
4. Run the server: `npm start`

## Environment Variables

- `N8N_WEBHOOK_URL`: The N8N webhook URL
- `N8N_AUTH_TOKEN`: Authentication token for N8N
- `PORT`: Server port (defaults to 3000)

## Deployment

This project is configured for automatic deployment using GitHub Actions. Push to the main branch to trigger deployment.

Make sure to set up the following secrets in your GitHub repository:
- `N8N_WEBHOOK_URL`
- `N8N_AUTH_TOKEN`
- `PORT` 