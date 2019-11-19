const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));

//const routes = require("./src/services/controllers/burgersController.js");

//app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
