const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const CashFlowTable = sequelize.define('CashFlow',{


    
});
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await CashFlowTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();


module.exports = {CashFlowTable}