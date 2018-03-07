const express = require('express');
const bodyParser = require('body-parser');

require('./services/plaid');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

require('./routes/plaidRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
