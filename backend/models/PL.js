const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');

    const PLTable = sequelize.define('PL_Worksheet', {
        Year_label: {
            type: DataTypes.STRING, // Adjust data type as per your needs
            primaryKey: true
        },
        audited_projected: {
            type: DataTypes.STRING, // Adjust data type as per your needs
            allowNull: false
        },
        capacity_utilization: {
            type: DataTypes.STRING, // Adjust data type as per your needs
            allowNull: false
        },

        // Amount fields
        amount_total_revenue_sales: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_cost_of_goods_sold: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_other_direct_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_gross_profit: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_other_income: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_gain_loss_on_sale_of_assest: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_office_administrative_overhead: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_financial_expenses_interest_exp: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_selling_and_distribution_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_profit_before_depreciation_and_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_depreciation_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_income_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_net_profit_after_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_profit_upto_last_year: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_withdrawal_dividend_drawing: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_provision: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_profit_transferred_to_balanced_sheet: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        amount_earning_before_interest_and_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        // Percent fields (similar structure as amount fields)
        percent_total_revenue_sales: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_cost_of_goods_sold: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_other_direct_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_gross_profit: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_other_income: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_gain_loss_on_sale_of_assest: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_office_administrative_overhead: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_financial_expenses_interest_exp: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_selling_and_distribution_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_profit_before_depreciation_and_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_depreciation_expenses: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_income_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percent_net_profit_after_tax: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    }, {
        tableName: 'PL_Worksheet',
        timestamps: true, // Disable timestamps
    });
    (async () => {
        await connectToDatabase();
    
        // Synchronize the model
        await PLTable.sync({ alter: true });
        console.log("The table for the PLTable model was just (re)created!");
    
    })();




module.exports = {PLTable}


