const { Router } = require("express");
const {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} = require("../controllers/data.controller.js");
const verifySuperuser = require("../middlewares/verifySuperuser.js");
const verifyToken = require("../middlewares/verifyToken.js");

const router = Router();

router.get("/", getData);
router.get("/:id", [verifyToken, verifySuperuser], getDataById);
router.post("/", [verifyToken, verifySuperuser], createData);
router.put("/:id", [verifyToken, verifySuperuser], updateData);
router.delete("/:id", [verifyToken, verifySuperuser], deleteData);

module.exports = router;
