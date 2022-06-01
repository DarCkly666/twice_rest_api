const Member = require("../models/Member.model.js");

const getAllMembers = (req, res) => {
  Member.find({}, (err, members) => {
    if (err || !members) {
      return res.status(404).json({
        error: true,
        message: "No members found",
      });
    }
    res.status(200).json(members);
  }).select("-__v -_id");
};

const getMemberById = (req, res) => {
  const { id } = req.params;
  Member.findById(id, (err, member) => {
    if (err || !member) {
      return res.status(404).json({
        error: true,
        message: "Member not found",
      });
    }
    res.status(200).json(member);
  }).select("-__v -_id");
};

const createMember = (req, res) => {
  const { body } = req;
  const member = new Member(body);
  member.save((err, member) => {
    if (err || !member) {
      return res.status(400).json({
        error: true,
        message: "Member not created",
      });
    }
    res.status(201).json({ error: false, message: "Member created" });
  });
};

const updateMember = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Member.findByIdAndUpdate(id, body, (err, member) => {
    if (err || !member) {
      return res.status(404).json({
        error: true,
        message: "Member not found",
      });
    }
    res.status(200).json({ error: false, message: "Member updated" });
  });
};

const deleteMember = (req, res) => {
  const { id } = req.params;
  Member.findByIdAndDelete(id, (err, member) => {
    if (err || !member) {
      return res.status(404).json({
        error: true,
        message: "Member not found",
      });
    }
    res.status(200).json({ error: false, message: "Member deleted" });
  });
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
