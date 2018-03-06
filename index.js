const express = require('express');
const bodyParser = require('body-parser');
const plaid = require('plaid');
const moment = require('moment');
const keys = require('./config/keys')

// We store the access_token in memory - in production, store it in a secure
// persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
  keys.PLAID_CLIENT_ID,
  keys.PLAID_SECRET,
  keys.PLAID_PUBLIC_KEY,
  plaid.environments[keys.PLAID_ENV]
);

const app = express();
const PORT = process.env.PORT || 5000;


app.post('/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    if (error != null) {
      console.log('Could not exchange public_token!' + '\n' + error);
      return response.json({error: msg});
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log('Access Token: ' + ACCESS_TOKEN);
    console.log('Item ID: ' + ITEM_ID);
    response.json({'error': false});
  });
});
app.listen(PORT);
