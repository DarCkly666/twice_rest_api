const { Router } = require("express");
const discographyRouter = require("./discography.routes.js");
const dataRouter = require("./data.routes.js");
const memberRouter = require("./member.routes.js");
const router = Router();

const version = "/api/v1";
router.use(`${version}/discography`, discographyRouter);
router.use(`${version}/data`, dataRouter);
router.use(`${version}/member`, memberRouter);

module.exports = router;
