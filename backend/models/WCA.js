const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const WCATable = sequelize.define('WCATable', {
    Year_label: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'Year_label'
    },
    sales: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Sales'
    },
    stocks: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'A_Stocks'
    },
    receivables: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'B_Receivables'
    },
    otherCATradeAdvances: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'C_Other_CA_Trade_Advances'
    },
    totalCurrentAssets: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'D_Total_Current_Assets'
    },
    creditors: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'E_Creditors'
    },
    otherCurrentLiabilities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'F_Other_Current_Liabilities'
    },
    totalCurrentLiabilities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'G_Total_Current_Liabilities'
    },
    netWorkingCapitalRequirement: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'H_Net_Working_Capital_Requirement'
    },
    bankFinance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'I_Bank_Finance'
    },
    nicAsiaBank: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'NIC_ASIA_Bank'
    },
    otherBFIs: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Other_BFIs'
    },
    equityFinance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Equity_Finance'
    },
    financingPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Financing_Percentage'
    },
    approvedDrawdownPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Approved_Drawdown_Percentage'
    }
}, {
    tableName: 'WCATable'
});

(async () => {
    await connectToDatabase();

    // Synchronize the model
    await WCATable.sync({ alter: true });
    console.log("The table for the WCATable model was just (re)created!");

})();

module.exports = { WCATable };
