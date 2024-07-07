
const {RiskGradingTable} = require('../models/riskgrading')

const yearsIndividualPostRiskGrading = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await RiskGradingTable.findOne({
            where: { ShareCapital: yearsData.ShareCapital }
        });

        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }

        await RiskGradingTable.create(dataEntry)
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

module.exports = { yearsIndividualPostRiskGrading };



