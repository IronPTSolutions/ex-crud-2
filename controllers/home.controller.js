module.exports.home = (req, res) => {
  res.render("home", {
    name: "Julio",
    date: new Date(),
  });
};
