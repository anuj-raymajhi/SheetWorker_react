const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const RiskGradingTable = sequelize.define('RiskGradingTable',{


    
});
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await RiskGradingTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();


module.exports = {RiskGradingTable}