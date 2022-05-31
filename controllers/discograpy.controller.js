const Discography = require("../models/discography.model");

const get = async (req, res) => {
  const discographies = await Discography.find();
  res.status(200).json(discographies);
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const discography = await Discography.findById(id).exec();
    if (!discography) {
      return res.status(404).json({
        error: true,
        message: "Discography not found",
      });
    }
    res.status(200).json(discography);
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
      err,
    });
  }
};

const create = async (req, res) => {
  const { body } = req;
  const discography = await new Discography(body);

  try {
    await discography.save();
    res.status(201).json({
      error: false,
      message: "Creating a discography",
      body: body,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const discography = await Discography.findOneAndUpdate(id, body);
  if (!discography) {
    return res.status(404).json({
      error: true,
      message: "Discography not found",
    });
  }

  await discography.save();
  res.status(200).json({
    error: false,
    message: "Updating a discography",
  });
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const discography = await Discography.findOneAndDelete(id);
    if (!discography) {
      return res.status(404).json({
        error: true,
        message: "Discography not found",
      });
    }
    res.status(200).json({
      error: false,
      message: "Discography deleted",
    });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
