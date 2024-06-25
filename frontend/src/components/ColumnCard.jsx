import React, { useEffect, useRef, useState } from 'react';
import colvals from '../data/colValue.json';

const Card = ({year}) => {
    // refs
    const yearLabel = `${year}/${(year + 1).toString().substr(-2)}`

    //gross profit input refs
    const TotalRevenueSalesRef = useRef(null);
    const Less_CostOfGoodsSoldRef = useRef(null);
    const Less_OtherDirectExpensesRef = useRef(null);

    //profit before depreciation and tax refs
    const Add_OtherIncomeRef = useRef(null)
    const Add_Less_Gain_LossOnSaleOfAssetRef = useRef(null)
    const Less_Office_AdministrativeOverheadRef = useRef(null)
    const Less_FinancialExpenses_InterestExpRef = useRef(null)
    const Less_Selling_DistributionExpensesRef = useRef(null)

    //net profit after tax ref
    const Less_DepreciationExpensesRef = useRef(null)
    const Less_IncomeTaxRef = useRef(null)


    const [colInformation, setColInformation] = useState({
        Audited_projected: null,
        Year: yearLabel,
        CapitalUtilization: null,
    })

    const updateColInformation = (key, value) => {
        if (key === 'CapitalUtilization' && value > 100){
            return
        }
        setColInformation(prevState => ({
          ...prevState,
          [key]: value
        }));
    };

    const deleteKeyColInformation = (key) => {
        setColInformation(prevState => {
          const newState = { ...prevState };
          delete newState[key];
          return newState;
        });
    };

    const [amountValues, setAmountValues] = useState({
        TotalRevenueSales: 0,
        Less_CostOfGoodsSold: 0,
        Less_OtherDirectExpenses: 0,
        GrossProfit: 0,
        Add_OtherIncome: 0,
        Add_Less_Gain_LossOnSaleOfAsset: 0,
        Less_Office_AdministrativeOverhead: 0,
        Less_FinancialExpenses_InterestExp: 0,
        Less_Selling_DistributionExpenses: 0,
        ProfitBeforeDepreciationTax: 0,
        Less_DepreciationExpenses: 0,
        Less_IncomeTax: 0,
        NetProfitAfterTax: 0,
        Add_ProfitUpToLastYear: 0,
        Less_Withdrawal_Dividend_Drawing: 0,
        Less_Provision_IfAny: 0,
        ProfitTransferredToBalanceSheet: 0,
        EarningBeforeInterestTax_EBIT: 0
    })

    const updateAmountValues = (key, value) => {
        setAmountValues(prevState => ({
          ...prevState,
          [key]: value
        }));
    };
    
    const deleteKeyAmountValues = (key) => {
        setAmountValues(prevState => {
          const newState = { ...prevState };
          delete newState[key];
          return newState;
        });
    };

    const [percentValues, setPercentValues] = useState({
        TotalRevenueSales: 0,
        Less_CostOfGoodsSold: 0,
        Less_OtherDirectExpenses: 0,
        GrossProfit: 0,
        Add_OtherIncome: 0,
        Add_Less_Gain_LossOnSaleOfAsset: 0,
        Less_Office_AdministrativeOverhead: 0,
        Less_FinancialExpenses_InterestExp: 0,
        Less_Selling_DistributionExpenses: 0,
        ProfitBeforeDepreciationTax: 0,
        Less_DepreciationExpenses: 0,
        Less_IncomeTax: 0,
        NetProfitAfterTax: 0,
        Add_ProfitUpToLastYear: 0,
        Less_Withdrawal_Dividend_Drawing: 0,
        Less_Provision_IfAny: 0,
        ProfitTransferredToBalanceSheet: 0,
        EarningBeforeInterestTax_EBIT: 0
    })

    const updatePercentValues = (key, value) => {
        setPercentValues(prevState => ({
          ...prevState,
          [key]: value
        }));
    };
    
    const deleteKeyPercentValues = (key) => {
        setPercentValues(prevState => {
          const newState = { ...prevState };
          delete newState[key];
          return newState;
        });
    };

    //code to update percent values

    //gross profit section
    useEffect(()=>{
        updatePercentValues(
            'TotalRevenueSales',
            (amountValues.TotalRevenueSales / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales])

    useEffect(()=>{
        updatePercentValues(
            'Less_CostOfGoodsSold',
            (amountValues.Less_CostOfGoodsSold / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.Less_CostOfGoodsSold, amountValues.TotalRevenueSales])

    useEffect(()=>{
        updatePercentValues(
            'Less_OtherDirectExpenses',
            (amountValues.Less_OtherDirectExpenses / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.Less_OtherDirectExpenses, amountValues.TotalRevenueSales])

    useEffect(()=>{
        updateAmountValues(
            'GrossProfit',
            amountValues.TotalRevenueSales - amountValues.Less_CostOfGoodsSold - amountValues.Less_OtherDirectExpenses
        )
    },[
        amountValues.TotalRevenueSales,
        amountValues.Less_CostOfGoodsSold,
        amountValues.Less_OtherDirectExpenses
    ])

    useEffect(()=>{
        updatePercentValues(
            'GrossProfit',
            (amountValues.GrossProfit / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.GrossProfit, amountValues.TotalRevenueSales])

    //profit before depreciation and tax section
    useEffect(()=>{
        updatePercentValues(
            'Add_OtherIncome',
            (amountValues.Add_OtherIncome / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.Add_OtherIncome])

    useEffect(()=>{
        updatePercentValues(
            'Add_Less_Gain_LossOnSaleOfAsset',
            (amountValues.Add_Less_Gain_LossOnSaleOfAsset / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.Add_Less_Gain_LossOnSaleOfAsset])

    useEffect(()=>{
        updatePercentValues(
            'Less_Office_AdministrativeOverhead',
            (amountValues.Less_Office_AdministrativeOverhead / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.Less_Office_AdministrativeOverhead])

    useEffect(()=>{
        updatePercentValues(
            'Less_FinancialExpenses_InterestExp',
            (amountValues.Less_FinancialExpenses_InterestExp / amountValues.TotalRevenueSales) * 100
        )
    }, [amountValues.TotalRevenueSales, amountValues.Less_FinancialExpenses_InterestExp])

    useEffect(()=>{
        updatePercentValues(
            'Less_Selling_DistributionExpenses',
            (amountValues.Less_Selling_DistributionExpenses / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.Less_Selling_DistributionExpenses])

    useEffect(()=>{
        updateAmountValues(
            'ProfitBeforeDepreciationTax',
            parseFloat(amountValues.GrossProfit) + parseFloat(amountValues.Add_OtherIncome) + parseFloat(amountValues.Add_Less_Gain_LossOnSaleOfAsset) 
            - parseFloat(amountValues.Less_Office_AdministrativeOverhead) - parseFloat(amountValues.Less_FinancialExpenses_InterestExp) - parseFloat(amountValues.Less_Selling_DistributionExpenses)
        )
    },[
        amountValues.GrossProfit,
        amountValues.Add_OtherIncome,
        amountValues.Add_Less_Gain_LossOnSaleOfAsset,
        amountValues.Less_Office_AdministrativeOverhead,
        amountValues.Less_FinancialExpenses_InterestExp,
        amountValues.Less_Selling_DistributionExpenses
    ])

    useEffect(()=>{
        updatePercentValues(
            'ProfitBeforeDepreciationTax',
            (amountValues.ProfitBeforeDepreciationTax / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.ProfitBeforeDepreciationTax])

    //Net profit after tax section
    useEffect(()=>{
        updatePercentValues(
            'Less_DepreciationExpenses',
            (amountValues.Less_DepreciationExpenses / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.Less_DepreciationExpenses, amountValues.TotalRevenueSales])

    useEffect(()=>{
        updatePercentValues(
            'Less_IncomeTax',
            (amountValues.Less_IncomeTax / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.Less_IncomeTax, amountValues.TotalRevenueSales])

    useEffect(()=>{
        updateAmountValues(
            'NetProfitAfterTax',
            amountValues.ProfitBeforeDepreciationTax - amountValues.Less_DepreciationExpenses - amountValues.Less_IncomeTax
        )
    },[
        amountValues.ProfitBeforeDepreciationTax,
        amountValues.Less_DepreciationExpenses,
        amountValues.Less_IncomeTax
    ])

    useEffect(()=>{
        updatePercentValues(
            'NetProfitAfterTax',
            (amountValues.NetProfitAfterTax / amountValues.TotalRevenueSales) * 100
        )
    },[amountValues.TotalRevenueSales, amountValues.NetProfitAfterTax])

    return (
        <div className={`max-w-sm bg-bck-gray rounded overflow-hidden shadow-lg transition-opacity duration-300 ${focus ? 'opacity-100' : 'opacity-30'}`}>
            {/* <img className="w-full" src={imageUrl} alt={title} /> */}
            <div className="m-2">
                <table className='w-full'>
                    <thead className='flex flex-col justify-center items-center font-bold text-sm'>
                        <tr className='border-y-2 border-x-2 w-full'>
                            <th className='block'>
                                <select
                                    className='text-center w-[300px]'
                                    value={colInformation.Audited_projected}
                                    onChange={(e)=>updateColInformation('Audited_projected', e.target.value)}
                                >
                                    <option value={null} className='text-sm'>Audited/Projected</option>
                                    <option value="Audited" className='text-sm'>Audited</option>
                                    <option value="Projected" className='text-sm'>Projected</option>
                                </select>
                            </th>
                        </tr>
                        <tr className='border-b-2 border-x-2 w-full'>
                            <th className='block'>
                                {/* <input
                                    type="text"
                                    className='text-center w-[300px]'
                                    value={colInformation.Year}
                                    onChange={(e)=>updateColInformation('Year', e.target.value)} 
                                /> */}
                                {colInformation.Year}
                            </th>
                        </tr>
                        <tr className='border-b-2 border-x-2 w-full'>
                            <th className='block'>
                                <input
                                    type="number"
                                    className='text-center w-[300px] pl-2'
                                    min={0}
                                    max={100}
                                    value={colInformation.CapitalUtilization}
                                    onChange={(e)=>updateColInformation('CapitalUtilization', parseFloat(e.target.value))} 
                                />
                            </th>
                        </tr>
                        <tr className='border-x-2'>
                            <th className='w-[150px] border-r-2'>
                                Amount
                            </th>
                            <th className='w-[150px]'>
                                %
                            </th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col justify-center items-center text-center text-sm border-2'>
                        {/*Gross Profit Section */}
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    value={amountValues.TotalRevenueSales}
                                    type='number'
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('TotalRevenueSales', parseFloat(e.target.value))} 
                                    ref={TotalRevenueSalesRef}
                                    onClick={()=>{TotalRevenueSalesRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.TotalRevenueSales.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {/* {colvals.amount.Less_CostOfGoodsSold} */}
                                <input
                                    type='number'
                                    value={amountValues.Less_CostOfGoodsSold}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_CostOfGoodsSold', parseFloat(e.target.value))}
                                    ref={Less_CostOfGoodsSoldRef}
                                    onClick={()=>{Less_CostOfGoodsSoldRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_CostOfGoodsSold.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {/* {colvals.amount.Less_OtherDirectExpenses} */}
                                <input
                                    type='number'
                                    value={amountValues.Less_OtherDirectExpenses} 
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_OtherDirectExpenses', parseFloat(e.target.value))}
                                    ref={Less_OtherDirectExpensesRef}
                                    onClick={()=>{Less_OtherDirectExpensesRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_OtherDirectExpenses.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='font-semibold border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {amountValues.GrossProfit}
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.GrossProfit.toFixed(2)} %`}
                            </td>
                        </tr>
                        {/*Profit before depreciation and tax Section */}
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Add_OtherIncome}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Add_OtherIncome', parseFloat(e.target.value))}
                                    ref={Add_OtherIncomeRef}
                                    onClick={()=>{Add_OtherIncomeRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Add_OtherIncome.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Add_Less_Gain_LossOnSaleOfAsset}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Add_Less_Gain_LossOnSaleOfAsset', parseFloat(e.target.value))}
                                    ref={Add_Less_Gain_LossOnSaleOfAssetRef}
                                    onClick={()=>{Add_Less_Gain_LossOnSaleOfAssetRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Add_Less_Gain_LossOnSaleOfAsset.toFixed(2)} %`}  
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Less_Office_AdministrativeOverhead}
                                    className='w-[150px] text-center pl-2' 
                                    onChange={(e)=>updateAmountValues('Less_Office_AdministrativeOverhead', parseFloat(e.target.value))}
                                    ref={Less_Office_AdministrativeOverheadRef}
                                    onClick={()=>{Less_Office_AdministrativeOverheadRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_Office_AdministrativeOverhead.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Less_FinancialExpenses_InterestExp}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_FinancialExpenses_InterestExp', parseFloat(e.target.value))}
                                    ref={Less_FinancialExpenses_InterestExpRef}
                                    onClick={()=>{Less_FinancialExpenses_InterestExpRef.current.select()}} 
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_FinancialExpenses_InterestExp.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Less_Selling_DistributionExpenses}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_Selling_DistributionExpenses', parseFloat(e.target.value))}
                                    ref={Less_Selling_DistributionExpensesRef}
                                    onClick={()=>{Less_Selling_DistributionExpensesRef.current.select()}} 
                                />
                            </td>
                            <td className='w-[150px] border-r-2'>
                                {`${percentValues.Less_Selling_DistributionExpenses.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {amountValues.ProfitBeforeDepreciationTax}
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.ProfitBeforeDepreciationTax.toFixed(2)} %`}
                            </td>
                        </tr>
                        {/*Net Profit after tax Section */}
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Less_DepreciationExpenses}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_DepreciationExpenses', parseFloat(e.target.value))}
                                    ref={Less_DepreciationExpensesRef}
                                    onClick={()=>{Less_DepreciationExpensesRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_DepreciationExpenses.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                <input
                                    type='number'
                                    value={amountValues.Less_IncomeTax}
                                    className='w-[150px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_IncomeTax', parseFloat(e.target.value))}
                                    ref={Less_IncomeTaxRef}
                                    onClick={()=>{Less_IncomeTaxRef.current.select()}}
                                />
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.Less_IncomeTax.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {amountValues.NetProfitAfterTax}
                            </td>
                            <td className='w-[150px]'>
                                {`${percentValues.NetProfitAfterTax.toFixed(2)} %`}
                            </td>
                        </tr>
                        {/*Profit transferred to balanced sheet Section */}
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {colvals.amount.Add_ProfitUpToLastYear}
                            </td>
                            <td className='w-[150px]'>
                                -
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {colvals.amount.Less_Withdrawal_Dividend_Drawing}
                            </td>
                            <td className='w-[150px]'>
                                -
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                {colvals.amount.Less_Provision_IfAny}
                            </td>
                            <td className='w-[150px]'>
                                -
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[150px] border-r-2'>
                                -
                            </td>
                            <td className='w-[150px]'>
                                -
                            </td>
                        </tr>
                        {/*EBIT Section */}
                        <tr className='font-bold'>
                            <td className='w-[150px] border-r-2'>
                                -
                            </td>
                            <td className='w-[150px]'>
                                -
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;
