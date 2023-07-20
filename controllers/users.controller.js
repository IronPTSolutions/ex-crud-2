const User = require("../models/user.model");

module.exports.list = (req, res) => {
  User.find()
    .then((users) => {
      res.render("users/list", { users });
    })
    .catch((err) => {
      // TODO
    });
};

module.exports.detail = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.render("users/detail", { user });
      } else {
        req.redirect("/users");
      }
    })
    .catch((err) => {});
};

module.exports.create = (req, res) => {
  // TODO
};

module.exports.doCreate = (req, res) => {
  // TODO
};

module.exports.edit = (req, res) => {
  // TODO
};

module.exports.doEdit = (req, res) => {
  // TODO
};

module.exports.delete = (req, res) => {
  // TODO
};
