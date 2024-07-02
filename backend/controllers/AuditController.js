const {AuditTable} = require('../models/audit')

const yearsData = async(req,res)=>{
    try{
        const years = await AuditTable.findAll({
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
    console.log(yearId)
    console.log('TESTTTTTTTTTTTTT')
    try {
        const year = await AuditTable.findOne({
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


const yearsIndividualPost = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await AuditTable.findOne({
            where: { Year_label: yearsData.yearId }
        });

        if (year) {
            console.error('Year id already present');
            return res.status(409).send({ message: 'Year data already present' });
        }

        const dataEntry = { Year_label: yearsData.yearId }; // Ensure the attribute name matches the model definition

        await AuditTable.create(dataEntry)
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