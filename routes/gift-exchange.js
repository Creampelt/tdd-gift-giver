const express = require("express");
const GiftExchange = require("../models/gift-exchange");
const { BadRequestError } = require("../utils/errors");

const router = express.Router();

router.post("/pairs", (req, res, next) => {
  try {
    if (!req.body || !req.body.names || !Array.isArray(req.body.names)) {
      next(new BadRequestError());
    }
    const pairs = GiftExchange.pairs(req.body.names);
    res.status(200).json(pairs);
  } catch (e) {
    next(e);
  }
});

router.post("/traditional", (req, res, next) => {
  try {
    if (!req.body || !req.body.names || !Array.isArray(req.body.names)) {
      next(new BadRequestError());
    }
    const pairs = GiftExchange.traditional(req.body.names);
    res.status(200).json(pairs);
  } catch (e) {
    next(e);
  }
});

module.exports = router;