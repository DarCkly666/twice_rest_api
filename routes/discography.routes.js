const { Router } = require("express");
const {
  get,
  getById,
  create,
  update,
  remove,
} = require("../controllers/discograpy.controller.js");
const router = Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
