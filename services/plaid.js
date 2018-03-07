const plaid = require('plaid');
const keys = require('../config/keys')
// We store the access_token in memory - in production, store it in a secure
// persistent data store
const ACCESS_TOKEN = null;
const PUBLIC_TOKEN = null;
const ITEM_ID = null;

// Initialize the Plaid client
const client = new plaid.Client(
  keys.PLAID_CLIENT_ID,
  keys.PLAID_SECRET,
  keys.PLAID_PUBLIC_KEY,
  plaid.environments[keys.PLAID_ENV]
);

module.exports = client;