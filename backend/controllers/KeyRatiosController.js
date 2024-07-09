
const {KeyRatiosTable} = require('../models/keyratios')

const yearsIndividualPostKeyRatios = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await KeyRatiosTable.findOne({
            where: { Year_label: yearsData.Year_label }
        });

        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }


        await KeyRatiosTable.create(yearsData)
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


const yearsIndividualKeyRatios = async(req,res)=>{
    const yearId = req.params.yearId; // Correctly get the yearId from request parameters
    try {
        const year = await KeyRatiosTable.findOne({
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


module.exports = { yearsIndividualPostKeyRatios,yearsIndividualKeyRatios };



