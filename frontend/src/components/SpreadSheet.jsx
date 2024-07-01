import React, { useEffect, useRef, useState } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, Cell } from '@syncfusion/ej2-react-spreadsheet';
import { useLocation } from 'react-router-dom';

function Spreadsheet({startYear, endYear}) {
    const spreadsheetRef = useRef(null);

    const location = useLocation();

    const [years, setYears] = useState({})

    const [plRowSheet, setPlRowSheet] = useState({
        audited_projected: [
            {
                colVal: 'Audited/Projected',
                colSpan: 1,
                rowSpan: 2,
                index: 0
            },
        ],
        year_label:[
            {
                colVal: '',
                colSpan: 1,
                rowSpan: 1,
                index: 0
            },
        ],
        capacity_utilization: [
            {
                colVal: 'Capacity Utilization (if applicable)',
                colSpan: 1,
                rowSpan: 1,
                index: 0
            },
        ],
        amt_percent:[
            {
                colVal: '',
                colSpan: 1,
                rowSpan: 1,
                index: 0
            },
        ],
        total_revenue_sales:[
            {
                colVal: 'Total Revenue/Sales',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        cost_of_goods_sold:[
            {
                colVal: 'Less: Cost of goods sold',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        other_direct_expenses:[
            {
                colVal: 'Less: Other direct expenses',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        gross_profit:[
            {
                colVal: 'Gross Profit',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        other_income:[
            {
                colVal: 'Add: Other Income',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        gain_loss_on_sale_of_assest:[
            {
                colVal: 'Add/(Less): Gain/(Loss) on sale of asset',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        office_administrative_overhead:[
            {
                colVal: 'Less: Office / Administrative Overhead',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        financial_expenses_interest_exp:[
            {
                colVal: 'Less: Financial Expenses/ Interest Exp',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        selling_and_distribution_expenses:[
            {
                colVal: 'Less: Selling & Distribution Expenses',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        profit_before_depreciation_and_tax:[
            {
                colVal: 'Profit before Depreciation & Tax',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        depreciation_expenses:[
            {
                colVal: 'Less: Depreciation Expenses',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        income_tax:[
            {
                colVal: 'Less: Income Tax',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        net_profit_after_tax:[
            {
                colVal: 'Net Profit After Tax',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        profit_upto_last_year:[
            {
                colVal: 'Add: Profit up to Last Year',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            },
            {
                colVal: 0,
                rowSpan: 1,
                colSpan: 1,
                index: 1
            },
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 2
            }
        ],
        withdrawal_dividend_drawing:[
            {
                colVal: 'Less: Withdrawal/ Dividend/ Drawing',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        provision:[
            {
                colVal: 'Less: Provision (If any)',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        profit_transferred_to_balanced_sheet:[
            {
                colVal: 'Profit transferred to Balance Sheet',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ],
        earning_before_interest_and_tax:[
            {
                colVal: 'Earning before interest & tax (EBIT)',
                rowSpan: 1,
                colSpan: 1,
                index: 0
            }
        ]
        
    })

    const [plColsVals, setPlColsVals] = useState({
        indexes:[],
        audited_projected: null,
        capacity_utilization: null,
        year_label:null,
        amount:{
            index:[],
            total_revenue_sales:null,
            cost_of_goods_sold:null,
            other_direct_expenses:null,
            gross_profit:null,
            other_income:null,
            gain_loss_on_sale_of_assest:null,
            office_administrative_overhead:null,
            financial_expenses_interest_exp:null,
            selling_and_distribution_expenses:null,
            profit_before_depreciation_and_tax:null,
            depreciation_expenses:null,
            income_tax:null,
            net_profit_after_tax:null,
            profit_upto_last_year:null,
            withdrawal_dividend_drawing:null,
            provision:null,
            profit_transferred_to_balanced_sheet:null,
            earning_before_interest_and_tax:null
        },
        percent:{
            index:[],
            total_revenue_sales:null,
            cost_of_goods_sold:null,
            other_direct_expenses:null,
            gross_profit:null,
            other_income:null,
            gain_loss_on_sale_of_assest:null,
            office_administrative_overhead:null,
            financial_expenses_interest_exp:null,
            selling_and_distribution_expenses:null,
            profit_before_depreciation_and_tax:null,
            depreciation_expenses:null,
            income_tax:null,
            net_profit_after_tax:null,
            profit_upto_last_year:null,
            withdrawal_dividend_drawing:null,
            provision:null,
            profit_transferred_to_balanced_sheet:null,
            earning_before_interest_and_tax:null
        }
    })

    const [plSheetVals, setPlSheetVals] = useState({})

    const [plSheetKeys, setPlSheetKeys] = useState([])

    useEffect(()=>{
        if (location.state) {
            setYears(prevState => ({
                ...prevState,
                ...location.state
            }))
        }
    },[])

    useEffect(() => {
        if (spreadsheetRef.current) {
            const sheetPanel = spreadsheetRef.current.querySelector('.e-sheet-panel');
            if (sheetPanel) {
                sheetPanel.style.height = '700px'; // Or any dynamic value
            }
        }
    }, []); // Empty dependency array ensures this runs once after initial render

    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var mainColIndex = 1;
            var subCol1Index = 1;
            var subCol2Index = 2;
            var yearCounter = years.yearStart;
            let updates = {};
            for (let i=0; i < time_in_years; i++){
                console.log(yearCounter)
                
                updates[yearCounter] ={
                    index:mainColIndex,
                    audited_projected: null,
                    capacity_utilization: null,
                    year_label:`${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                    amount:{
                        index:subCol1Index,
                        total_revenue_sales:null,
                        cost_of_goods_sold:null,
                        other_direct_expenses:null,
                        gross_profit:null,
                        other_income:null,
                        gain_loss_on_sale_of_assest:null,
                        office_administrative_overhead:null,
                        financial_expenses_interest_exp:null,
                        selling_and_distribution_expenses:null,
                        profit_before_depreciation_and_tax:null,
                        depreciation_expenses:null,
                        income_tax:null,
                        net_profit_after_tax:null,
                        profit_upto_last_year:null,
                        withdrawal_dividend_drawing:null,
                        provision:null,
                        profit_transferred_to_balanced_sheet:null,
                        earning_before_interest_and_tax:null
                    },
                    percent:{
                        index:subCol2Index,
                        total_revenue_sales:null,
                        cost_of_goods_sold:null,
                        other_direct_expenses:null,
                        gross_profit:null,
                        other_income:null,
                        gain_loss_on_sale_of_assest:null,
                        office_administrative_overhead:null,
                        financial_expenses_interest_exp:null,
                        selling_and_distribution_expenses:null,
                        profit_before_depreciation_and_tax:null,
                        depreciation_expenses:null,
                        income_tax:null,
                        net_profit_after_tax:null,
                        profit_upto_last_year:null,
                        withdrawal_dividend_drawing:null,
                        provision:null,
                        profit_transferred_to_balanced_sheet:null,
                        earning_before_interest_and_tax:null
                    }
                }

                yearCounter += 1;
                mainColIndex += 2
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlSheetVals(prevState => ({
                ...prevState,
                ...updates
            }))
        }
    },[years])

    // useeffect for audited_projected row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var mainColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 2,
                        rowSpan: 1,
                        index: mainColIndex
                    }
                )
                mainColIndex += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                audited_projected: [
                    ...prevState.audited_projected,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for year_label row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let mainColIndex = 1;
            let yearCounter = years.yearStart;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 2,
                        rowSpan: 1,
                        index: mainColIndex
                    }
                )
                yearCounter += 1
                mainColIndex += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                year_label: [
                    ...prevState.year_label,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for capacity utilization
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let mainColIndex = 1;

            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: '0%',
                        colSpan: 2,
                        rowSpan: 1,
                        index: mainColIndex
                    }
                )
                mainColIndex += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                capacity_utilization: [
                    ...prevState.capacity_utilization,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for amount and percent subcols
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Amount',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                    }
                )
                update.push(
                    {
                        colVal: 'Percent',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                amt_percent: [
                    ...prevState.amt_percent,
                    ...update
                ]
            }))
        }
    }, [years])

    //useEffect for total revenue sales row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${totalRevSalesRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                total_revenue_sales: [
                    ...prevState.total_revenue_sales,
                    ...update
                ]
            }))

        }
    },[years])

    // useEffect for cost of goods sold row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 6
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                cost_of_goods_sold: [
                    ...prevState.cost_of_goods_sold,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for other direct expenses
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 7;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                other_direct_expenses: [
                    ...prevState.other_direct_expenses,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for gross profit row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let costOfGoodsSoldRow = 6;
            let otherDirectExpensesRow = 7;
            let currentRow = 8;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${totalRevSalesRow}-${subCol1}${costOfGoodsSoldRow}-${subCol1}${otherDirectExpensesRow}`
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                gross_profit: [
                    ...prevState.gross_profit,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for other income row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 9;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                other_income: [
                    ...prevState.other_income,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for Add/(Less): Gain/(Loss) on sale of asset
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 10;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                gain_loss_on_sale_of_assest: [
                    ...prevState.gain_loss_on_sale_of_assest,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for office/administrative overhead
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 11;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                office_administrative_overhead: [
                    ...prevState.office_administrative_overhead,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for Financial  Expenses/ Interest Exp row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 12;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                financial_expenses_interest_exp: [
                    ...prevState.financial_expenses_interest_exp,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for selling and distribution expenses
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 13;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                selling_and_distribution_expenses: [
                    ...prevState.selling_and_distribution_expenses,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for profit before depreciation and tax
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let grossProfitRow = 8;
            let otherIncomeRow = 9;
            let GainLossRow = 10;
            let officeAdminRow = 11;
            let financialExpIntRow = 12;
            let sellingAndDistributionRow = 13;
            let currentRow = 14;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${grossProfitRow}+${subCol1}${otherIncomeRow}+${subCol1}${GainLossRow}-${subCol1}${officeAdminRow}-${subCol1}${financialExpIntRow}-${subCol1}${sellingAndDistributionRow}`
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                profit_before_depreciation_and_tax: [
                    ...prevState.profit_before_depreciation_and_tax,
                    ...update
                ]
            }))
        }
    }, [years])

    // useEffect for depreciation expenses
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 15;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                depreciation_expenses: [
                    ...prevState.depreciation_expenses,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for income tax
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let currentRow = 16;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ''
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                income_tax: [
                    ...prevState.income_tax,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for net profit after tax
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let totalRevSalesRow = 5;
            let profitBeforeRow = 14;
            let depreciationRow = 15;
            let incomeTaxRow = 16;
            let currentRow = 17;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${profitBeforeRow}-${subCol1}${depreciationRow}-${subCol1}${incomeTaxRow}`
                    }
                )
                update.push(
                    {
                        colVal: 0,
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: `=IFERROR(${subCol1}${currentRow}/${subCol1}${totalRevSalesRow}*100,"")`
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                net_profit_after_tax: [
                    ...prevState.net_profit_after_tax,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for profit up to last year
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 3;
            let subCol2Index = 4;
            let profitTransferredToBS = 21;
            // let totalRevSalesRow = 5;
            // let currentRow = 18;
            let update = [];
            for (let i = 0; i < time_in_years-1; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index-2);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${profitTransferredToBS}`
                    }
                )
                update.push(
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: ``
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                profit_upto_last_year: [
                    ...prevState.profit_upto_last_year,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for withdrawal/dividend/drawing
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            // let totalRevSalesRow = 5;
            // let currentRow = 19;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                // let subCol1 = getSpreadsheetColumn(subCol1Index-2);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ``
                    }
                )
                update.push(
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: ``
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                withdrawal_dividend_drawing: [
                    ...prevState.withdrawal_dividend_drawing,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for provision row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            // let totalRevSalesRow = 5;
            // let currentRow = 20;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                // let subCol1 = getSpreadsheetColumn(subCol1Index-2);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: ``
                    }
                )
                update.push(
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: ``
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                provision: [
                    ...prevState.provision,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for profit transferred to balanced sheet row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let netProfitAfterTaxRow = 17;
            let profitUptoLastYearRow = 18;
            let withdrawalYearRow = 19;
            let provisionRow = 20;
            // let totalRevSalesRow = 5;
            // let currentRow = 21;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${netProfitAfterTaxRow}+${subCol1}${profitUptoLastYearRow}-${subCol1}${withdrawalYearRow}-${subCol1}${provisionRow}`
                    }
                )
                update.push(
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: ``
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                profit_transferred_to_balanced_sheet: [
                    ...prevState.profit_transferred_to_balanced_sheet,
                    ...update
                ]
            }))
        }
    },[years])

    //useEffect for EBIT row
    useEffect(()=>{
        if (years) {
            let time_in_years = years.yearEnd - years.yearStart + 1;
            let subCol1Index = 1;
            let subCol2Index = 2;
            let profitTfToBSRow = 21;
            let depreciationRow = 15;
            let incomeTaxRow = 16;
            // let totalRevSalesRow = 5;
            // let currentRow = 22;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                let subCol1 = getSpreadsheetColumn(subCol1Index);
                update.push( 
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol1Index,
                        formula: `=${subCol1}${profitTfToBSRow}+${subCol1}${depreciationRow}+${subCol1}${incomeTaxRow}`
                    }
                )
                update.push(
                    {
                        colVal: '',
                        colSpan: 1,
                        rowSpan: 1,
                        index: subCol2Index,
                        formula: ``
                    }
                )
                subCol1Index += 2
                subCol2Index += 2
            }
            setPlRowSheet(prevState => ({
                ...prevState,
                earning_before_interest_and_tax: [
                    ...prevState.earning_before_interest_and_tax,
                    ...update
                ]
            }))
        }
    },[years])

    useEffect(()=>{
        if (years && plSheetVals) {
            console.log(plSheetVals)
            setPlSheetKeys(Object.keys(plSheetVals))
        }
    },[plSheetVals, years])


    const handleCellSave = (args) => {
        console.log('Cell saved:', args); // Logs detailed information about the saved cell
        console.log(`Value changed to ${args.value} at address ${args.address}`);
    };
    
    const getSpreadsheetColumn = (index) => {
        let column = "";
        while (index >= 0) {
            let remainder = index % 26;
            column = String.fromCharCode(65 + remainder) + column;
            index = Math.floor(index / 26) - 1;
        }
        return column;
    }

    // const cellMapper = (address, colIndexs) => {
        
    // }


    return (
        <div ref={spreadsheetRef}>
            <SpreadsheetComponent style={{ minHeight: '500px' }} cellSave={handleCellSave}>
                <SheetsDirective>
                    <SheetDirective>
                        {/* <RangesDirective>
                            <RangeDirective startCell='B1' endCell='C1' merge={true} />
                        </RangesDirective> */}

                        <RowsDirective>
                            {/*Audited/Projected row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.audited_projected.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective key={index} index={value.index} value={value.colVal} rowSpan={value.rowSpan} colSpan={value.colSpan} />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*year label row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective key={index} index={value.index} value={value.colVal} rowSpan={value.rowSpan} colSpan={value.colSpan} />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*capacity utilization row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.capacity_utilization.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective key={index} index={value.index} value={value.colVal} rowSpan={value.rowSpan} colSpan={value.colSpan} />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*amount percent row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.amt_percent.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective key={index} index={value.index} value={value.colVal} rowSpan={value.rowSpan} colSpan={value.colSpan} />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*total revenue sales row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.total_revenue_sales.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cost of goods sold row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.cost_of_goods_sold.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Other direct expenses */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.other_direct_expenses.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*gross profit row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.gross_profit.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan}
                                                        formula={value.formula} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*other income row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.other_income.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Gain/(Loss) on sale of asset row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.gain_loss_on_sale_of_assest.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Office / Administrative Overhead row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.office_administrative_overhead.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Financial  Expenses/ Interest Exp row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.financial_expenses_interest_exp.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Selling  & Distribution Expenses row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.selling_and_distribution_expenses.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Profit before Depreciation & Tax row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.profit_before_depreciation_and_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Depreciation Expenses row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.depreciation_expenses.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Income Tax row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.income_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Net Profit After Tax row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.net_profit_after_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Add: Profit up to Last Year row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.profit_upto_last_year.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Withdrawal/ Dividend/ Drawing row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.withdrawal_dividend_drawing.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Less: Provision (If any)  row*/}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.provision.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Profit transferred to Balance Sheet row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.profit_transferred_to_balanced_sheet.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan} 
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Earning before interest & tax (EBIT) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        plRowSheet.earning_before_interest_and_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index} 
                                                        index={value.index} 
                                                        value={value.colVal} 
                                                        rowSpan={value.rowSpan} 
                                                        colSpan={value.colSpan}
                                                        formula={value.formula} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={250} />
                            {
                                Object.keys(plSheetVals).map((x, index)=>(
                                    <ColumnDirective key={index} width={100} />
                                ))
                            }
                            {
                                Object.keys(plSheetVals).map((x, index)=>(
                                    <ColumnDirective key={index} width={100} />
                                ))
                            }
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
            <button>
                Add Value
            </button>
        </div>
    );


}

export default Spreadsheet;
