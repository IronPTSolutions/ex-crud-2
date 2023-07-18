const express = require("express");

const app = express();

/** Configure view engine **/
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

/** Congiure static files */
app.use(express.static("public"));

/** Routes */
const router = require("./config/routes.config");
app.use(router);

app.listen(3000, () => {
  console.log("Ready!");
});
