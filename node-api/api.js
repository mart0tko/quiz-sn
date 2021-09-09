const express = require("express");
// Sample model
// var Order = require("./Order");
var cors = require("cors");
const app = express();
const router = require("./router");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(cors());

app.use(router);

// Middleware if needed
// router.use((request, response, next) => {
//   console.log("middleware");
//   next();
// });

var port = process.env.PORT || 8090;
app.listen(process.env.PORT || port, (err) => {
  if (err) console.log("Unable to start the server!");
  else console.log("Server started running on : " + port);
});
