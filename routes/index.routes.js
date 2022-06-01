const { Router } = require("express");
const router = Router();

const version = "/api/v1";
router.use(`${version}/discography`, require("./discography.routes.js"));

module.exports = router;
