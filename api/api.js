const express = require("express");
const path = require("path");

// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /artwork.
const apiRoutes = express.Router();

// This section will help you get a list of all the records.
apiRoutes.route("/").get(function (req, res) {
 res.send("Hello this is the api");
});


// Add endpoints for each of the apis
apiRoutes.use(require(path.join(__dirname, "artwork")));

// Catch anything that fails to hit an endpoint
apiRoutes.route("/*").get(function (req, res) {
 res.status(404).send("404");
});

module.exports = apiRoutes;
