const express = require('express');
const router = express.Router();

const { yearsData, yearsIndividual,yearsIndividualPost } = require('../controllers/PLController');
const {yearsIndividualPostBSheet, yearsIndividualBSheet} = require('../controllers/BSheetController')
const {yearsIndividualPostCashFlow, yearsIndividualCashFlow} = require('../controllers/CashFlowController')
const {yearsIndividualPostRiskGrading, yearsIndividualRiskGrading} = require('../controllers/RiskGradingController')
const {yearsIndividualPostKeyRatios,yearsIndividualKeyRatios} = require('../controllers/KeyRatiosController')
const {yearsIndividualPostKFA,yearsIndividualKFA} = require('../controllers/KFAController')
const {yearsIndividualPostSummaryCashFlow,yearsIndividualSummaryCashFlow} = require('../controllers/SummaryCashFlowController')
const {yearsIndividualPostWCA,yearsIndividualWCA} = require('../controllers/WCAController')

router.get('/years', yearsData);
router.get('/year/:yearId', yearsIndividual);
router.get('/yearsBSheet/:yearId', yearsIndividualBSheet);
router.get('/yearsCashFlow/:yearId', yearsIndividualCashFlow);
router.get('/yearsRiskGrading/:yearId', yearsIndividualRiskGrading);
router.get('/yearsKeyRatios/:yearId', yearsIndividualKeyRatios);
router.get('/yearsKFA/:yearId', yearsIndividualKFA);
router.get('/yearsSummaryCashFlow/:yearId', yearsIndividualSummaryCashFlow);
router.get('/yearsWCA/:yearId', yearsIndividualWCA);

router.post('/yearsEntry',yearsIndividualPost)
router.post('/yearsEntryBSheet',yearsIndividualPostBSheet)
router.post('/yearsEntryCashFlow',yearsIndividualPostCashFlow)
router.post('/yearsEntryRiskGrading',yearsIndividualPostRiskGrading)
router.post('/yearsEntryKeyRatios',yearsIndividualPostKeyRatios)
router.post('/yearsEntryKFA',yearsIndividualPostKFA)
router.post('/yearsEntrySummaryCashFlow',yearsIndividualPostSummaryCashFlow)
router.post('/yearsEntryKFA',yearsIndividualPostKFA)
router.post('/yearsEntryWCA',yearsIndividualPostWCA)



module.exports = router;