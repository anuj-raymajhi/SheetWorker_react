const express = require('express');
const router = express.Router();

const { yearsData, yearsIndividual,yearsIndividualPost } = require('../controllers/AuditController');


router.get('/years', yearsData);
router.get('/year/:yearId', yearsIndividual);
router.post('/yearsEntry',yearsIndividualPost)

module.exports = router;