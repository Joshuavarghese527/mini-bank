const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./services/plaid');


const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require('./routes/plaidRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
