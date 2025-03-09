const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.post('/add', async (req, res) => {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.json({ message: 'Patient added successfully' });
});

module.exports = router;
