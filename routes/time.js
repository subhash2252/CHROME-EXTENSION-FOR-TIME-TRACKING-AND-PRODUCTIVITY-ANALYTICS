const express = require('express');
const router = express.Router();
const TimeLog = require('../models/TimeLog');


router.post('/log', async (req, res) => {
  try {
    const { userId, logs } = req.body;

    const date = new Date().toISOString().slice(0, 10); // e.g. "2025-06-09"

    const entries = Object.entries(logs).map(([domain, timeSpent]) => ({
      userId,
      domain,
      timeSpent,
      date
    }));

    await TimeLog.insertMany(entries);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save time logs' });
  }
});


router.get('/report/:userId', async (req, res) => {
  const { userId } = req.params;

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const report = await TimeLog.aggregate([
    { $match: { userId, date: { $gte: sevenDaysAgo.toISOString().slice(0, 10) } } },
    {
      $group: {
        _id: "$domain",
        totalTime: { $sum: "$timeSpent" }
      }
    },
    { $sort: { totalTime: -1 } }
  ]);

  res.json(report);
});

module.exports = router;
