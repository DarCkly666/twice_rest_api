const { Router } = require("express");
const router = Router();
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/user.controller.js");

const verifySuperuser = require("../middlewares/verifySuperuser.js");
const verifyToken = require("../middlewares/verifyToken.js");

router.get("/", [verifyToken, verifySuperuser], getUser);
router.get("/:id", [verifyToken, verifySuperuser], getUserById);
router.post("/", [verifyToken, verifySuperuser], createUser);
router.put("/:id", [verifyToken, verifySuperuser], updateUser);
router.delete("/:id", [verifyToken, verifySuperuser], deleteUser);
router.post("/login", login);

module.exports = router;
