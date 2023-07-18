module.exports.list = (req, res) => {
  res.send("user list");
};

module.exports.detail = (req, res) => {
  console.log("query", req.query);
  console.log("path", req.params);

  res.send("user detail");
};

module.exports.create = (req, res) => {
  res.send("user create");
};

module.exports.update = (req, res) => {
  res.send("user update");
};

module.exports.delete = (req, res) => {
  res.send("user delete");
};
