const {PLTable} = require('../models/PL')

const yearsData = async(req,res)=>{
    try{
        const years = await PLTable.findAll({
            attributes: ['Year_label','audited_projected'] // Select only the Year_label attribute
        });
        if(!years){
            console.log(years)
            return res.status(404).send({message:'No years data foound'});
        }
        res.status(200).send(years)

    }catch(err){
        console.error(err);
        res.status(500).send({message: 'Internal Server error'})
    }
}


const yearsIndividual = async(req,res)=>{
    const yearId = req.params.yearId; // Correctly get the yearId from request parameters
    // console.log(yearId)
    // console.log('TESTTTTTTTTTTTTT')
    try {
        const year = await PLTable.findOne({
            where:{Year_label: yearId}
        });

        if (!year) {
            return res.status(404).send({ message: 'No years data found' });
        }

        res.status(200).send(year);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server error' });
    }
};


// const yearsIndividualPost = async (req, res) => {
//     const yearsData = req.body;
//     console.log(yearsData);

//     try {
//         const year = await PLTable.findOne({
//             where: { Year_label: yearsData.yearId }
//         });

//         if (year) {
//             console.error('Year id already present');
//             return res.status(409).send({ message: 'Year data already present' });
//         }

//         const dataEntry = { Year_label: yearsData.yearId }; // Ensure the attribute name matches the model definition

//         await PLTable.create(dataEntry)
//             .then((data) => {
//                 console.log('Data entry successful');
//                 return res.status(200).send({ message: 'Row added to table' });
//             })
//             .catch((error) => {
//                 console.error('Error creating entry:', error);
//                 return res.status(500).send({ message: 'Internal Server error' });
//             });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ message: 'Internal Server error' });
//     }
// };




const yearsIndividualPost = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await PLTable.findOne({
            where: { Year_label: yearsData.Year_label }
        });

        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }

        // Ensure all attribute names match the model definition
        const dataEntry = {
            Year_label: yearsData.Year_label,
            audited_projected: yearsData.audited_projected,
            capacity_utilization: yearsData.capacity_utilization,
            amount_total_revenue_sales: yearsData.amount_total_revenue_sales,
            amount_cost_of_goods_sold: yearsData.amount_cost_of_goods_sold,
            amount_other_direct_expenses: yearsData.amount_other_direct_expenses,
            amount_gross_profit: yearsData.amount_gross_profit,
            amount_other_income: yearsData.amount_other_income,
            amount_gain_loss_on_sale_of_assest: yearsData.amount_gain_loss_on_sale_of_assest,
            amount_office_administrative_overhead: yearsData.amount_office_administrative_overhead,
            amount_financial_expenses_interest_exp: yearsData.amount_financial_expenses_interest_exp,
            amount_selling_and_distribution_expenses: yearsData.amount_selling_and_distribution_expenses,
            amount_profit_before_depreciation_and_tax: yearsData.amount_profit_before_depreciation_and_tax,
            amount_depreciation_expenses: yearsData.amount_depreciation_expenses,
            amount_income_tax: yearsData.amount_income_tax,
            amount_net_profit_after_tax: yearsData.amount_net_profit_after_tax,
            amount_profit_upto_last_year: yearsData.amount_profit_upto_last_year,
            amount_withdrawal_dividend_drawing: yearsData.amount_withdrawal_dividend_drawing,
            amount_provision: yearsData.amount_provision,
            amount_profit_transferred_to_balanced_sheet: yearsData.amount_profit_transferred_to_balanced_sheet,
            amount_earning_before_interest_and_tax: yearsData.amount_earning_before_interest_and_tax,
            percent_total_revenue_sales: yearsData.percent_total_revenue_sales,
            percent_cost_of_goods_sold: yearsData.percent_cost_of_goods_sold,
            percent_other_direct_expenses: yearsData.percent_other_direct_expenses,
            percent_gross_profit: yearsData.percent_gross_profit,
            percent_other_income: yearsData.percent_other_income,
            percent_gain_loss_on_sale_of_assest: yearsData.percent_gain_loss_on_sale_of_assest,
            percent_office_administrative_overhead: yearsData.percent_office_administrative_overhead,
            percent_financial_expenses_interest_exp: yearsData.percent_financial_expenses_interest_exp,
            percent_selling_and_distribution_expenses: yearsData.percent_selling_and_distribution_expenses,
            percent_profit_before_depreciation_and_tax: yearsData.percent_profit_before_depreciation_and_tax,
            percent_depreciation_expenses: yearsData.percent_depreciation_expenses,
            percent_income_tax: yearsData.percent_income_tax,
            percent_net_profit_after_tax: yearsData.percent_net_profit_after_tax
        };

        await PLTable.create(dataEntry)
            .then((data) => {
                console.log('Data entry successful');
                return res.status(200).send({ message: 'Row added to table' });
            })
            .catch((error) => {
                console.error('Error creating entry:', error);
                return res.status(500).send({ message: 'Internal Server error' });
            });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal Server error' });
    }
};




module.exports = { yearsData,yearsIndividual,yearsIndividualPost };