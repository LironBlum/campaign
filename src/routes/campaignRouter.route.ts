import express from "express";

const router = express.Router();
const campaignController = require("../controllers/campaignController.controller");

router.get("/:sortBy/:sortDirection", campaignController.getCampaigns);

module.exports = router;
