const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new portfolio item
router.post('/', async (req, res) => {
  const { title, description, videoUrl } = req.body;
  try {
    const newPortfolio = new Portfolio({ title, description, videoUrl });
    await newPortfolio.save();
    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
