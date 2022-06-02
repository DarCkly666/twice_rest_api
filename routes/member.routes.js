const { Router } = require("express");
const router = Router();

const {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
} = require("../controllers/member.controller.js");

const verifySuperuser = require("../middlewares/verifySuperuser.js");
const verifyToken = require("../middlewares/verifyToken.js");

router.get("/", getAllMembers);
router.get("/:id", [verifyToken, verifySuperuser], getMemberById);
router.post("/", [verifyToken, verifySuperuser], createMember);
router.put("/:id", [verifyToken, verifySuperuser], updateMember);
router.delete("/:id", [verifyToken, verifySuperuser], deleteMember);

module.exports = router;
