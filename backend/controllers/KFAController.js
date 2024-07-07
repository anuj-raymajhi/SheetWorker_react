
const {KeyFinancialTable} = require('../models/kfa')

const yearsIndividualPostKFA = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await KeyFinancialTable.findOne({
            where: { Year_label: yearsData.Year_label }
        });

        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }


        await KeyFinancialTable.create(yearsData)
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

module.exports = { yearsIndividualPostKFA };



