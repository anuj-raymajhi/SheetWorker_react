const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const SummaryCashFlowTable = sequelize.define('SummaryCashFlowTable', {
    Year_label: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Year_label'
    },
    cashFromOperatingActivities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Operating_Activities'
    },
    cashFromInvestingActivities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Investing_Activities'
    },
    cashFromFinancingActivities: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Cash_From_Financing_Activities'
    },
    netCashFlow: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Net_Cash_Flow'
    },
    closingCashBankBalance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'Closing_Cash_Bank_Balance'
    }
}, {
    tableName: 'SummaryCashFlow'
});

(async () => {
    await connectToDatabase();

    // Synchronize the model
    await SummaryCashFlowTable.sync({ alter: true });
    console.log("The table for the SummaryCashFlow model was just (re)created!");

})();

module.exports = { SummaryCashFlowTable };
