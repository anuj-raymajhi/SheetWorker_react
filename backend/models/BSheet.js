const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

const BSheetTable = sequelize.define('BSheet&Ratios', {
    Year_label: {
        type: DataTypes.STRING, // Adjust data type as per your needs
        primaryKey: true
    },
    ShareCapital: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ReservesRetainedEarnings: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    DirectorsLoanSubordinatedLoan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    EffectiveNetworth: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    LongTermLoan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    PrincipalLTLRepaidDuringYear: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalLongTermLoan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    WorkingCapitalLoan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Creditors: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Payables: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    OtherCurrentLiabilitiesProvisions: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalCurrentLiabilities: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalCapitalLiabilities: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Land: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    BuildingCivilStructureNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    PlantMachineryNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    FurnitureFixturesNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    OfficeEquipmentNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    VehiclesNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    OtherFixedAssetsNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalFixedAssetsNetAfterDepreciation: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Investment: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    OtherIntangibleAssets: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalLongTermInvestment: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    CashBank: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    StoreStock: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    DebtorsReceivables: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    OtherCurrentAssets: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalCurrentAssets: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    TotalAssets: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Diff: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},

{
    tableName: 'BSheet&Ratios',
    timestamps: false
});

// Synchronize the model with the database
(async () => {
    await connectToDatabase();

    // Synchronize the model
    await BSheetTable.sync({ alter: false });
    console.log("The table for the BSheet&Ratios model was just (re)created!");

})();

module.exports = { BSheetTable };


