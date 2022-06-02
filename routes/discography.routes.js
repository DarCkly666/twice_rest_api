const { Router } = require("express");
const {
  get,
  getById,
  create,
  update,
  remove,
} = require("../controllers/discograpy.controller.js");
const verifySuperuser = require("../middlewares/verifySuperuser.js");
const verifyToken = require("../middlewares/verifyToken.js");
const router = Router();

router.get("/", get);
router.get("/:id", [verifyToken, verifySuperuser], getById);
router.post("/", [verifyToken, verifySuperuser], create);
router.put("/:id", [verifyToken, verifySuperuser], update);
router.delete("/:id", [verifyToken, verifySuperuser], remove);

module.exports = router;
