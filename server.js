//require express
const express = require('express');
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

//parse as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burgerController.js');

app.use(routes);

// Start server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);


