const express = require('express');
const router = express.Router();

const { yearsData, yearsIndividual,yearsIndividualPost } = require('../controllers/PLController');
const {yearsIndividualPostBSheet} = require('../controllers/BSheetController')
const {yearsIndividualPostCashFlow} = require('../controllers/CashFlowController')

router.get('/years', yearsData);
router.get('/year/:yearId', yearsIndividual);
router.post('/yearsEntry',yearsIndividualPost)

router.post('/yearsEntryBSheet',yearsIndividualPostBSheet)
router.post('/yearsEntryCashFlow',yearsIndividualPostCashFlow)

module.exports = router;