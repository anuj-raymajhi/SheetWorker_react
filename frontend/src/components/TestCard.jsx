import React, { useEffect, useRef, useState } from 'react';
import colvals from '../data/colValue.json';

const Card = () => {
    // refs
    const TotalRevenueSalesRef = useRef(null);
    const Less_CostOfGoodsSoldRef = useRef(null);
    const Less_OtherDirectExpensesRef = useRef(null);

    const [colInformation, setColInformation] = useState({
        Audited_projected: null,
        Year: null,
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

    // code to update percent values
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

    return (
        <div className={`max-w-sm bg-bck-gray rounded overflow-hidden shadow-lg transition-opacity duration-300 ${focus ? 'opacity-100' : 'opacity-30'}`}>
            {/* <img className="w-full" src={imageUrl} alt={title} /> */}
            <div className="m-2">
                <table className='w-full'>
                    <thead className='flex flex-col justify-center items-center font-bold text-sm'>
                        <tr className='border-y-2 border-x-2 w-full'>
                            <th className='block'>
                                <select
                                    className='text-center w-[160px]'
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
                                <input
                                    type="text"
                                    className='text-center w-[160px]'
                                    value={colInformation.Year}
                                    onChange={(e)=>updateColInformation('Year', e.target.value)} 
                                />
                            </th>
                        </tr>
                        <tr className='border-b-2 border-x-2 w-full'>
                            <th className='block'>
                                <input
                                    type="number"
                                    className='text-center w-[160px] pl-2'
                                    min={0}
                                    max={100}
                                    value={colInformation.CapitalUtilization}
                                    onChange={(e)=>updateColInformation('CapitalUtilization', e.target.value)} 
                                />
                            </th>
                        </tr>
                        <tr className='border-x-2'>
                            <th className='w-[80px] border-r-2'>
                                Amount
                            </th>
                            <th className='w-[80px]'>
                                %
                            </th>
                        </tr>
                    </thead>
                    <tbody className='flex flex-col justify-center items-center text-center text-sm border-2'>
                        {/*Gross Profit Section */}
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                <input
                                    value={amountValues.TotalRevenueSales}
                                    type='number'
                                    className='w-[80px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('TotalRevenueSales', e.target.value)} 
                                    ref={TotalRevenueSalesRef}
                                    onClick={()=>{TotalRevenueSalesRef.current.select()}}
                                />
                            </td>
                            <td className='w-[80px]'>
                                {`${percentValues.TotalRevenueSales.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {/* {colvals.amount.Less_CostOfGoodsSold} */}
                                <input
                                    type='number'
                                    value={amountValues.Less_CostOfGoodsSold}
                                    className='w-[80px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_CostOfGoodsSold', e.target.value)}
                                    ref={Less_CostOfGoodsSoldRef}
                                    onClick={()=>{Less_CostOfGoodsSoldRef.current.select()}}
                                />
                            </td>
                            <td className='w-[80px]'>
                                {`${percentValues.Less_CostOfGoodsSold.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {/* {colvals.amount.Less_OtherDirectExpenses} */}
                                <input
                                    type='number'
                                    value={amountValues.Less_OtherDirectExpenses} 
                                    className='w-[80px] text-center pl-2'
                                    onChange={(e)=>updateAmountValues('Less_OtherDirectExpenses', e.target.value)}
                                    ref={Less_OtherDirectExpensesRef}
                                    onClick={()=>{Less_OtherDirectExpensesRef.current.select()}}
                                />
                            </td>
                            <td className='w-[80px]'>
                                {`${percentValues.Less_OtherDirectExpenses.toFixed(2)} %`}
                            </td>
                        </tr>
                        <tr className='font-semibold border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                -
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        {/*Profit before depreciation and tax Section */}
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Add_OtherIncome}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Add_Less_Gain_LossOnSaleOfAsset}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_Office_AdministrativeOverhead}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_FinancialExpenses_InterestExp}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_Selling_DistributionExpenses}
                            </td>
                            <td className='w-[80px] border-r-2'>
                                10
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                -
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        {/*Net Profit after tax Section */}
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_DepreciationExpenses}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_IncomeTax}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                -
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        {/*Profit transferred to balanced sheet Section */}
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Add_ProfitUpToLastYear}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_Withdrawal_Dividend_Drawing}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                {colvals.amount.Less_Provision_IfAny}
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        <tr className='font-bold border-b-2'>
                            <td className='w-[80px] border-r-2'>
                                -
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                        {/*EBIT Section */}
                        <tr className='font-bold'>
                            <td className='w-[80px] border-r-2'>
                                -
                            </td>
                            <td className='w-[80px]'>
                                10
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;
