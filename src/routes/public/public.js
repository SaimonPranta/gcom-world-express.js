const express = require("express");
const { getPlacementID } = require("../../controllers/public/user");

const router = express.Router();
router.get("/get_placement_id/:userID", getPlacementID);

module.exports = router;