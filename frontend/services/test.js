import { postBSheet, postCashFlow } from './axios.service.js';

const submitBSheet = async () => {
  const bSheetData = {
    "Year_label": 2095,
    "ShareCapital": 1660000,
    "ReservesRetainedEarnings": 50000,
    "DirectorsLoanSubordinatedLoan": 20000,
    "EffectiveNetworth": 120000,
    "LongTermLoan": 150000,
    "PrincipalLTLRepaidDuringYear": 10000,
    "TotalLongTermLoan": 140000,
    "WorkingCapitalLoan": 50000,
    "Creditors": 30000,
    "Payables": 25000,
    "OtherCurrentLiabilitiesProvisions": 15000,
    "TotalCurrentLiabilities": 70000,
    "TotalCapitalLiabilities": 270000,
    "Land": 100000,
    "BuildingCivilStructureNetAfterDepreciation": 80000,
    "PlantMachineryNetAfterDepreciation": 60000,
    "FurnitureFixturesNetAfterDepreciation": 10000,
    "OfficeEquipmentNetAfterDepreciation": 5000,
    "VehiclesNetAfterDepreciation": 15000,
    "OtherFixedAssetsNetAfterDepreciation": 7000,
    "TotalFixedAssetsNetAfterDepreciation": 167000,
    "Investment": 30000,
    "OtherIntangibleAssets": 2000,
    "TotalLongTermInvestment": 32000,
    "CashBank": 25000,
    "StoreStock": 15000,
    "DebtorsReceivables": 20000,
    "OtherCurrentAssets": 5000,
    "TotalCurrentAssets": 65000,
    "TotalAssets": 264000,
    "Diff": 6000
};


  try {
    const response = await postBSheet(bSheetData);
    if (response.data) {
      console.log("Balance sheet data posted successfully:", response);
    } else {
      console.error("Failed to post balance sheet data:", response.error);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

const submitCashFlow = async () => {
  const cashFlowData = {
    "Year_label": "2095",
    "auditedProjected": "Audited",
    "cashFromOperatingActivities": 100000.00,
    "profitAfterTax": 80000.00,
    "interestPaid": 5000.00,
    "depreciationAmortization": 10000.00,
    "decreaseIncreaseInStock": -2000.00,
    "decreaseIncreaseInReceivables": 3000.00,
    "decreaseIncreaseInOtherCurrentAssets": 1500.00,
    "increaseDecreaseInCreditors": -4000.00,
    "increaseDecreaseInPayable": 2000.00,
    "increaseDecreaseInOtherCurrentLiabilities": 500.00,
    "lossGainOnSaleOfFixedAssets": -1000.00,
    "cashFromOperatingActivitiesA": 95000.00,
    "salePurchaseOfFixedAssets": -15000.00,
    "cashFromInvestingActivitiesB": -15000.00,
    "increaseInShareCapital": 20000.00,
    "drawing": -5000.00,
    "increaseDecreaseInLoanFromPromoters": 3000.00,
    "increaseDecreaseInLongTermLoan": 10000.00,
    "increaseDecreaseInShortTermLoan": 5000.00,
    "interestPaidFinancing": -4000.00,
    "cashFromFinancingActivitiesC": 28000.00,
    "netCashFlow": 108000.00,
    "openingCashBankBalance": 5000.00,
    "closingCashBankBalance": 113000.00
  }
  ;

  try {
    const response = await postCashFlow(cashFlowData);
    if (response.data) {
      console.log("Cash flow data posted successfully:", response);
    } else {
      console.error("Failed to post cash flow data:", response.error);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

// Example usage
submitBSheet();
submitCashFlow();
