const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const RiskGradingTable = sequelize.define('RiskGradingTable', {
    Year_label: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Year_label'
    },
    debtToEquity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Debt_to_Equity'
    },
    cashConversionCycle: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_Conversion_Cycle'
    },
    returnOnEquity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Return_on_Equity'
    },
    grossProfit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Gross_Profit'
    },
    projectedSales: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Projected_Sales'
    },
    actualSalesAgainstProjectedSales: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Actual_Sales_Against_Projected_Sales'
    }
}, {
    tableName: 'RiskGrading'
});

(async () => {
    await connectToDatabase();

    // Synchronize the model
    await RiskGradingTable.sync({ alter: true });
    console.log("The table for the RiskGrading model was just (re)created!");

})();

module.exports = { RiskGradingTable };
