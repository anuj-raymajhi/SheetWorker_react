const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const CashFlowTable = sequelize.define('CashFlow', {
    Projected:{
        type:DataTypes.STRING,
        allowNull: false,
        field: 'Projected'
        },
    Year_label: {
        type: DataTypes.STRING, // Adjust data type as per your needs
        primaryKey: true
    },
    auditedProjected: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Audited_Projected'
    },
    cashFromOperatingActivities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Operating_Activities'
    },
    profitAfterTax: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Profit_After_Tax'
    },
    interestPaid: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Interest_Paid'
    },
    depreciationAmortization: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Depreciation_Amortization'
    },
    decreaseIncreaseInStock: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Decrease_Increase_In_Stock'
    },
    decreaseIncreaseInReceivables: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Decrease_Increase_In_Receivables'
    },
    decreaseIncreaseInOtherCurrentAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Decrease_Increase_In_Other_Current_Assets'
    },
    increaseDecreaseInCreditors: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Creditors'
    },
    increaseDecreaseInPayable: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Payable'
    },
    increaseDecreaseInOtherCurrentLiabilities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Other_Current_Liabilities'
    },
    lossGainOnSaleOfFixedAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Loss_Gain_On_Sale_Of_Fixed_Assets'
    },
    cashFromOperatingActivitiesA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Operating_Activities_A'
    },
    salePurchaseOfFixedAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Sale_Purchase_Of_Fixed_Assets'
    },
    cashFromInvestingActivitiesB: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Investing_Activities_B'
    },
    increaseInShareCapital: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_In_Share_Capital'
    },
    drawing: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Drawing'
    },
    increaseDecreaseInLoanFromPromoters: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Loan_From_Promoters'
    },
    increaseDecreaseInLongTermLoan: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Long_Term_Loan'
    },
    increaseDecreaseInShortTermLoan: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Increase_Decrease_In_Short_Term_Loan'
    },
    interestPaidFinancing: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Interest_Paid_Financing'
    },
    cashFromFinancingActivitiesC: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Financing_Activities_C'
    },
    netCashFlow: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Net_Cash_Flow'
    },
    openingCashBankBalance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Opening_Cash_Bank_Balance'
    },
    closingCashBankBalance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Closing_Cash_Bank_Balance'
    }
}, {
    tableName: 'CashFlow'
});

(async () => {
    await connectToDatabase();

    // Synchronize the model
    await CashFlowTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();

module.exports = { CashFlowTable };
