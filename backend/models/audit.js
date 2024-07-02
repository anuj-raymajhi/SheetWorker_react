const { Sequelize, DataTypes } = require('sequelize');
const { sequelize, connectToDatabase } = require('../db');





    const AuditTable = sequelize.define('PL_Worksheet', {
        Year_label: {
            type: DataTypes.STRING, // Adjust data type as per your needs
            primaryKey: true
        },
        audited_projected: {
            type: DataTypes.STRING, // Adjust data type as per your needs
        },
        capacity_utilization: {
            type: DataTypes.STRING, // Adjust data type as per your needs
        },

        // Amount fields
        amount_total_revenue_sales: {
            type: DataTypes.FLOAT,
        },
        amount_cost_of_goods_sold: {
            type: DataTypes.FLOAT,
        },
        amount_other_direct_expenses: {
            type: DataTypes.FLOAT,
        },
        amount_gross_profit: {
            type: DataTypes.FLOAT,
        },
        amount_other_income: {
            type: DataTypes.FLOAT,
        },
        amount_gain_loss_on_sale_of_assest: {
            type: DataTypes.FLOAT,
        },
        amount_office_administrative_overhead: {
            type: DataTypes.FLOAT,
        },
        amount_financial_expenses_interest_exp: {
            type: DataTypes.FLOAT,
        },
        amount_selling_and_distribution_expenses: {
            type: DataTypes.FLOAT,
        },
        amount_profit_before_depreciation_and_tax: {
            type: DataTypes.FLOAT,
        },
        amount_depreciation_expenses: {
            type: DataTypes.FLOAT,
        },
        amount_income_tax: {
            type: DataTypes.FLOAT,
        },
        amount_net_profit_after_tax: {
            type: DataTypes.FLOAT,
        },
        amount_profit_upto_last_year: {
            type: DataTypes.FLOAT,
        },
        amount_withdrawal_dividend_drawing: {
            type: DataTypes.FLOAT,
        },
        amount_provision: {
            type: DataTypes.FLOAT,
        },
        amount_profit_transferred_to_balanced_sheet: {
            type: DataTypes.FLOAT,
        },
        amount_earning_before_interest_and_tax: {
            type: DataTypes.FLOAT,
        },
        // Percent fields (similar structure as amount fields)
        percent_total_revenue_sales: {
            type: DataTypes.FLOAT,
        },
        percent_cost_of_goods_sold: {
            type: DataTypes.FLOAT,
        },
        percent_other_direct_expenses: {
            type: DataTypes.FLOAT,
        },
        percent_gross_profit: {
            type: DataTypes.FLOAT,
        },
        percent_other_income: {
            type: DataTypes.FLOAT,
        },
        percent_gain_loss_on_sale_of_assest: {
            type: DataTypes.FLOAT,
        },
        percent_office_administrative_overhead: {
            type: DataTypes.FLOAT,
        },
        percent_financial_expenses_interest_exp: {
            type: DataTypes.FLOAT,
        },
        percent_selling_and_distribution_expenses: {
            type: DataTypes.FLOAT,
        },
        percent_profit_before_depreciation_and_tax: {
            type: DataTypes.FLOAT,
        },
        percent_depreciation_expenses: {
            type: DataTypes.FLOAT,
        },
        percent_income_tax: {
            type: DataTypes.FLOAT,
        },
        percent_net_profit_after_tax: {
            type: DataTypes.FLOAT,
        },
    }, {
        tableName: 'PL_Worksheet',
        timestamps: false, // Disable timestamps
    });





module.exports = {AuditTable}


// const dummyData = [
//     {
//         Year_label: '2073',
//         audited_projected: 'Audited',
//         capacity_utilization: '80%',
//         amount_total_revenue_sales: 1000000,
//         amount_cost_of_goods_sold: 600000,
//         amount_gross_profit: 400000,
//         amount_net_profit_after_tax: 200000,
//         percent_gross_profit: 40,
//         percent_net_profit_after_tax: 20
//     },
//     {
//         Year_label: '2074',
//         audited_projected: 'Projected',
//         capacity_utilization: '85%',
//         amount_total_revenue_sales: 1200000,
//         amount_cost_of_goods_sold: 700000,
//         amount_gross_profit: 500000,
//         amount_net_profit_after_tax: 250000,
//         percent_gross_profit: 41.67,
//         percent_net_profit_after_tax: 20.83
//     },
//     {
//         Year_label: '2075',
//         audited_projected: 'Projected',
//         capacity_utilization: '90%',
//         amount_total_revenue_sales: 1500000,
//         amount_cost_of_goods_sold: 850000,
//         amount_gross_profit: 650000,
//         amount_net_profit_after_tax: 325000,
//         percent_gross_profit: 43.33,
//         percent_net_profit_after_tax: 21.67
//     }
// ];


const insertDummyData = async (AuditTable) => {

    try {
        await AuditTable.bulkCreate(dummyData);
        console.log('Dummy data inserted successfully');
    } catch (err) {
        console.error('Error inserting dummy data:', err);
    }
};
