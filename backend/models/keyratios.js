const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const KeyRatiosTable = sequelize.define('KeyRatios',{


    
});
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await KeyRatiosTable.sync({ alter: true });
    console.log("The table for the CashFlow model was just (re)created!");

})();


module.exports = {KeyRatiosTable}