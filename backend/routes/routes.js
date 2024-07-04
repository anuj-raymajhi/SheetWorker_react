const express = require('express');
const router = express.Router();

const { yearsData, yearsIndividual,yearsIndividualPost } = require('../controllers/PLController');
const {yearsIndividualPostBSheet} = require('../controllers/BSheetController')

router.get('/years', yearsData);
router.get('/year/:yearId', yearsIndividual);
router.post('/yearsEntry',yearsIndividualPost)

router.post('/yearsEntryBSheet',yearsIndividualPostBSheet)

module.exports = router;