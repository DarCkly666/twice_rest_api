const Discography = require("../models/discography.model");

const get = async (req, res) => {
  const discographies = await Discography.findAll();
  res.status(200).json(discographies);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const discography = await Discography.findByPk(id);
  if (!discography) {
    return res.status(404).json({
      error: true,
      message: "Discography not found",
    });
  }
  res.status(200).json(discography);
};

const create = async (req, res) => {
  const { body } = req;
  const discography = await Discography.create(body);

  if (!discography) {
    return res.status(404).json({
      error: true,
      message: "Discography not found",
    });
  }

  res.status(200).json({
    error: false,
    message: "Creating a discography",
    body: body,
  });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const discography = await Discography.findByPk(id);
  if (!discography) {
    return res.status(404).json({
      error: true,
      message: "Discography not found",
    });
  }

  discography.update(body);
  res.status(200).json({
    error: false,
    message: "Updating a discography",
  });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const discography = await Discography.findByPk(id);
  if (!discography) {
    return res.status(404).json({
      error: true,
      message: "Discography not found",
    });
  }

  discography.destroy();
  res.status(200).json({
    error: false,
    message: "Removing a discography",
  });
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
