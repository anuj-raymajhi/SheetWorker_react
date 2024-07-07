const {BSheetTable} = require('../models/BSheet')

const yearsIndividualPostBSheet = async (req, res) => {
    const yearsData = req.body;
    console.log(yearsData);

    try {
        const year = await BSheetTable.findOne({
            where: { Year_label: yearsData.Year_label }
        });
        if (year) {
            console.error('Year data already present');
            return res.status(409).send({ message: 'Year data already present' });
        }


        // // Ensure all attribute names match the model definition
        // const dataEntry = {
        //     ShareCapital: yearsData.ShareCapital,
        //     ReservesRetainedEarnings: yearsData.ReservesRetainedEarnings,
        //     DirectorsLoanSubordinatedLoan: yearsData.DirectorsLoanSubordinatedLoan,
        //     EffectiveNetworth: yearsData.EffectiveNetworth,
        //     LongTermLoan: yearsData.LongTermLoan,
        //     PrincipalLTLRepaidDuringYear: yearsData.PrincipalLTLRepaidDuringYear,
        //     TotalLongTermLoan: yearsData.TotalLongTermLoan,
        //     WorkingCapitalLoan: yearsData.WorkingCapitalLoan,
        //     Creditors: yearsData.Creditors,
        //     Payables: yearsData.Payables,
        //     OtherCurrentLiabilitiesProvisions: yearsData.OtherCurrentLiabilitiesProvisions,
        //     TotalCurrentLiabilities: yearsData.TotalCurrentLiabilities,
        //     TotalCapitalLiabilities: yearsData.TotalCapitalLiabilities,
        //     Land: yearsData.Land,
        //     BuildingCivilStructureNetAfterDepreciation: yearsData.BuildingCivilStructureNetAfterDepreciation,
        //     PlantMachineryNetAfterDepreciation: yearsData.PlantMachineryNetAfterDepreciation,
        //     FurnitureFixturesNetAfterDepreciation: yearsData.FurnitureFixturesNetAfterDepreciation,
        //     OfficeEquipmentNetAfterDepreciation: yearsData.OfficeEquipmentNetAfterDepreciation,
        //     VehiclesNetAfterDepreciation: yearsData.VehiclesNetAfterDepreciation,
        //     OtherFixedAssetsNetAfterDepreciation: yearsData.OtherFixedAssetsNetAfterDepreciation,
        //     TotalFixedAssetsNetAfterDepreciation: yearsData.TotalFixedAssetsNetAfterDepreciation,
        //     Investment: yearsData.Investment,
        //     OtherIntangibleAssets: yearsData.OtherIntangibleAssets,
        //     TotalLongTermInvestment: yearsData.TotalLongTermInvestment,
        //     CashBank: yearsData.CashBank,
        //     StoreStock: yearsData.StoreStock,
        //     DebtorsReceivables: yearsData.DebtorsReceivables,
        //     OtherCurrentAssets: yearsData.OtherCurrentAssets,
        //     TotalCurrentAssets: yearsData.TotalCurrentAssets,
        //     TotalAssets: yearsData.TotalAssets,
        //     Diff: yearsData.Diff
        // };

        await BSheetTable.create(yearsData)
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

module.exports = { yearsIndividualPostBSheet };



