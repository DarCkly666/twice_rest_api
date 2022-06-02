const Data = require("../models/Data.model.js");

const getData = (req, res) => {
  Data.find({}, (err, data) => {
    if (err) {
      return res.status(500).json({ error: true, message: "Data not found" });
    }
    res.status(200).json(data);
  }).select("-_id -__v");
};

const getDataById = (req, res) => {
  const { id } = req.params;
  Data.findById(id, (err, data) => {
    if (err || !data) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }
    res.status(200).json({ error: false, data });
  }).select("-_id -__v");
};

const createData = (req, res) => {
  const { body } = req;
  const data = new Data(body);

  data.save((err, data) => {
    if (err || !data) {
      return res.status(400).json({ error: true, message: "Data not found" });
    }
    res
      .status(201)
      .json({ error: false, message: "Data created successfully" });
  });
};

const updateData = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Data.findOneAndUpdate(id, body, (err, data) => {
    if (err || !data) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }
    res
      .status(200)
      .json({ error: false, message: "Data updated successfully" });
  });
};

const deleteData = (req, res) => {
  const { id } = req.params;

  Data.findByIdAndRemove(id, (err, data) => {
    if (err || !data) {
      return res.status(404).json({ error: true, message: "Data not found" });
    }
    res
      .status(200)
      .json({ error: false, message: "Data created successfully" });
  });
};

module.exports = {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
};
