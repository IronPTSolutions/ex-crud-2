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
  res.render("users/new");
};

module.exports.doCreate = (req, res) => {
  User.create({
    name: req.body.name,
  })
    .then((user) => {
      res.redirect("/users");
    })
    .catch(() => {});
};

module.exports.edit = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render("users/edit", { user });
    })
    .catch(() => {});
};

module.exports.doEdit = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  })
    .then((user) => {
      res.redirect("/users");
    })
    .catch(() => {});
};

module.exports.delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
    .catch(() => {});
};
