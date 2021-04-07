//dependencies
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const express = require('express');
require("dotenv").config();

const app = express();

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db",
  });
}


connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Export connection for ORM
module.exports = connection;