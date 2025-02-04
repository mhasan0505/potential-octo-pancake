const express = require('express');
const router = express.Router();
const sslcz = require('../config/sslcommerz.js');

router.post('/init', async (req, res) => {
  try {
    const response = await sslcz.init(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/success', async (req, res) => {
  // Handle successful payment
  res.redirect(`${process.env.FRONTEND_URL}/payment/status?status=success`);
});

router.post('/fail', async (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/payment/status?status=fail`);
});

router.post('/cancel', async (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/payment/status?status=cancel`);
});

module.exports = router;