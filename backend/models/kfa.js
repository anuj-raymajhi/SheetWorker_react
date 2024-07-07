const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const KeyFinancialTable = sequelize.define('KeyFinancial',{


    
});
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await KeyFinancialTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();


module.exports = {KeyFinancialTable}