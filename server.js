const express = require('express');
const method = require('method-override');
const body = require('body-parser');
const exphbs = require("express-handlebars");
const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(port);