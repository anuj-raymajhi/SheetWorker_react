const express = require('express');
const router = express.Router();

const { yearsData, yearsIndividual,yearsIndividualPost } = require('../controllers/PLController');
const {yearsIndividualPostBSheet} = require('../controllers/BSheetController')
const {yearsIndividualPostCashFlow} = require('../controllers/CashFlowController')
const {yearsIndividualPostRiskGrading} = require('../controllers/RiskGradingController')

const {yearsIndividualPostKeyRatios} = require('../controllers/KeyRatiosController')
const {yearsIndividualPostKFA} = require('../controllers/KFAController')
const {yearsIndividualPostSummaryCashFlow} = require('../controllers/SummaryCashFlowController')

router.get('/years', yearsData);
router.get('/year/:yearId', yearsIndividual);

router.post('/yearsEntry',yearsIndividualPost)
router.post('/yearsEntryBSheet',yearsIndividualPostBSheet)
router.post('/yearsEntryCashFlow',yearsIndividualPostCashFlow)
router.post('/yearsEntryRiskGrading',yearsIndividualPostRiskGrading)
router.post('/yearsEntryKeyRatios',yearsIndividualPostKeyRatios)
router.post('/yearsEntryKFA',yearsIndividualPostKFA)
router.post('/yearsEntrySummaryCashFlow',yearsIndividualPostSummaryCashFlow)

router.post('/yearsEntryKFA',yearsIndividualPostKFA)



module.exports = router;