const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const SummaryCashFlowTable = sequelize.define('SummaryCashFlowTable',{


    
});
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await SummaryCashFlowTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();


module.exports = {SummaryCashFlowTable}