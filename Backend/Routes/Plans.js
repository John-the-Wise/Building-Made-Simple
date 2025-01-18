const express = require('express');
const Plan = require('./Models/Plan');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const { fileName, fileUrl, comments } = req.body;
  try {
    const plan = new Plan({ fileName, fileUrl, comments });
    await plan.save();
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});