const { CashFlowTable } = require('../models/Cashflow');

const yearsIndividualPostCashFlow = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        // Check if the year data already exists
        const year = await CashFlowTable.findOne({
            where: { Year_label: yearsData.Year_label }
        });

        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }

        // Create a new entry in the CashFlowTable
        await CashFlowTable.create(yearsData)
            .then((data) => {
                console.log('Data entry successful', data);
                return res.status(201).send({ message: 'Row added to table', data });
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

module.exports = { yearsIndividualPostCashFlow };
