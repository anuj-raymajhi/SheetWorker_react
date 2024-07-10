const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const KeyFinancialTable = sequelize.define('KeyFinancial', {
    Projected:{
        type:DataTypes.STRING,
        allowNull: false,
        field: 'Projected'
        },
    Year_label: {
        type: DataTypes.STRING,
        primaryKey: true,
        field: 'Year_label'
    },
    sales: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Sales'
    },
    percentChangeInSales: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Percent_Change_in_Sales'
    },
    profitAfterTax: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Profit_After_Tax'
    },
    netProfitToSalesRatio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Net_Profit_to_Sales_Ratio'
    },
    effectiveNetWorth: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Effective_Net_Worth'
    },
    directorsLoanSubordinatedDebt: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Directors_Loan_Subordinated_Debt'
    },
    paidUpCapital: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Paid_Up_Capital'
    },
    netFixedAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Net_Fixed_Assets'
    },
    termLoan: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Term_Loan'
    },
    termLoanToNetFixedAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Term_Loan_to_Net_Fixed_Assets'
    },
    netCurrentAsset: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Net_Current_Asset'
    },
    workingCapitalLoan: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Working_Capital_Loan'
    },
    workingCapitalLoanToNCA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Working_Capital_Loan_to_NCA'
    }
}, {
    tableName: 'KeyFinancial'
});

(async () => {
    await connectToDatabase();

    // Synchronize the model
    await KeyFinancialTable.sync({ alter: true });
    console.log("The table for the KeyFinancial model was just (re)created!");

})();

module.exports = { KeyFinancialTable };
