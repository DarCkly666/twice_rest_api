const { Router } = require("express");
const {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} = require("../controllers/data.controller.js");

const router = Router();

router.get("/", getData);
router.get("/:id", getDataById);
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

module.exports = router;
