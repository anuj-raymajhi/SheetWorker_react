import React, { useEffect, useRef, useState } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, Cell } from '@syncfusion/ej2-react-spreadsheet';
import { useLocation } from 'react-router-dom';

function Spreadsheet() {
    const spreadsheetRef = useRef(null);

    const location = useLocation();

    const [years, setYears] = useState({})

// States for PL worksheet
    const [plRowSheet, setPlRowSheet] = useState({
        audited_projected: [
            {
                colVal: 'Audited/Projected',
                colSpan: 1,
                rowSpan: 2,
                index: 0,
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

// States for Balanced Sheet

    const [bsSheetKeys, setBsSheetKeys] = useState([])

    const [bsSheetVals, setBsSheetVals] = useState({})

    const [bsRowSheet, setBsRowSheet] = useState({
        // capital and liabilities rows
        audited_projected:[
            {
                colVal: 'Audited/Projected?',
                rowSpan: 2,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        year_label:[
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        capital_and_liabilities:[
            {
                colVal: 'Capital & Liabilities',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        share_capital: [
            {
                colVal: 'Share Capital',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        reserves_and_retained_earnings: [
            {
                colVal: 'Reserves & Retained Earnings',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                formula: '',
                isReadOnly: true
            }
        ],
        directors_loan_subordinated_loan: [
            {
                colVal: 'Directors Loan/Subordinated Loan',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        effective_networth: [
            {
                colVal: 'Effective Networth',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        long_term_loan: [
            {
                colVal: 'Long Term Loan (LTL)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        principal_of_LTL_repaid_during_the_year: [
            {
                colVal: 'Principal of LTL Repaid During the Year',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_long_term_loan: [
            {
                colVal: 'Total Long Term Loan',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        working_capital_loan: [
            {
                colVal: 'Working Capital Loan (STL)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        creditors: [
            {
                colVal: 'Creditors',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        payables: [
            {
                colVal: 'Payables',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_current_liabilities_and_provisions:[
            {
                colVal: 'Other Current Liabilities & Provisions',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_current_liabilities: [
            {
                colVal: 'Total Current Liabilities',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_capital_and_liabilities: [
            {
                colVal: 'Total Capital & Liabilities',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            },
        ],
        //empty row
        empty_row: [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],

        //assets section rows
        assets: [
            {
                colVal: 'Assets',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        land: [
            {
                colVal: 'Land',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        building_civil_structure: [
            {
                colVal: 'Building/ Civil Structure(Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        plant_and_machinery: [
            {
                colVal: 'Plant & Machinery(Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        furniture_and_fixtures: [
            {
                colVal: 'Furniture & Fixtures (Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        office_equipment: [
            {
                colVal: 'Office Equipment(Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        vehicles: [
            {
                colVal: 'Vehicles(Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_fixed_assets: [
            {
                colVal: 'Other Fixed Assets(Net after Depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_fixed_assets: [
            {
                colVal: 'Total Fixed Assets (net after depreciation)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        investment: [
            {
                colVal: 'Investment',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_intangible_assets: [
            {
                colVal: 'Other Intangible Assets',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_long_term_investments: [
            {
                colVal: 'Total Long Term Investment',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        cash_bank: [
            {
                colVal: 'Cash / Bank',
                rowSpan: 1,
                colSpan: 1, 
                index: 0,
                isReadOnly: true
            }
        ],
        store_stock: [
            {
                colVal: 'Store / Stock',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        debtors_receivables: [
            {
                colVal: 'Debtors / Receivables',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_current_assets: [
            {
                colVal: 'Other Current Assets',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_current_assets: [
            {
                colVal: 'Total Current Assets',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_assets: [
            {
                colVal: 'Total Assets',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        //diff section
        diff: [
            {
                colVal: 'Diff',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ]
    })

// States for Cashflow worksheet

    const [cfSheetKeys, setCfSheetKeys] = useState([])

    const [cfSheetVals, setCfSheetVals] = useState({})

    const [cfRowSheet, setCfRowSheet] = useState({
        audited_projected: {
            audited_projected: [
                {
                    colVal: 'Audited/Projected?',
                    rowSpan: 2,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            year_label: [
                {
                    colVal: '',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        cash_from_operating_activities: {
            cash_from_operating_activities: [
                {
                    colVal: 'Cash From Operating Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            profit_after_tax: [
                {
                    colVal: 'Profit After Tax',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            interest_paid: [
                {
                    colVal: 'Add: Interest Paid',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            depreciation_amortization: [
                {
                    colVal: 'Add: Depreciation/ Amortization',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            dec_inc_in_stock: [
                {
                    colVal: 'Add/(Less): Decrease (Increase) in Stock',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            dec_inc_in_receivables: [
                {
                    colVal: 'Add/(Less): Decrease (Increase) in Receivables',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            dec_inc_in_other_current_assets: [
                {
                    colVal: 'Add/(Less): Decrease (Increase) in Other Current Assets',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_creditors: [
                {
                    colVal: 'Add/(Less): Increase (Decrease) in Creditors',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_payable: [
                {
                    colVal: 'Add/(Less): Increase (Decrease) in Payable',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_other_current_liabilities: [
                {
                    colVal: 'Add/(Less): Increase (Decrease) in Other Current Liabilities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            loss_gain_on_sale_of_fixed_assets: [
                {
                    colVal: 'Add/(Less): Loss/(Gain) on Sale of Fixed Assets',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_from_operating_activities_A: [
                {
                    colVal: 'Cash From Operating Activities (A)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]

        },
        empty_row_1: [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        cash_from_investing_activities: {
            cash_from_investing_activities: [
                {
                    colVal: 'Cash From Investing Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            sale_purchase_of_fixed_assets: [
                {
                    colVal: 'Add/(Less): Sale (Purchase) of Fixed Assets',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_from_investing_activities_B: [
                {
                    colVal: 'Cash From Investing Activities (B)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        empty_row_2: [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        cash_from_financing_activities: {
            cash_from_financing_activities: [
                {
                    colVal: 'Cash From Financing Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_in_share_capital: [
                {
                    colVal: 'Add: Increase in Share Capital',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            drawing: [
                {
                    colVal: 'Less: Drawing',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_loan_of_promoters: [
                {
                    colVal: 'Add/(Less): Increase/(Decrease) in Loan from Promoters',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_long_term_loan: [
                {
                    colVal: 'Add/(Less): Increase/(Decrease) in Long Term Loan',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            inc_dec_in_short_term_loan: [
                {
                    colVal: 'Add/(Less): Increase/(Decrease) in Short Term Loan',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            interest_paid: [
                {
                    colVal: 'Less: Interest Paid',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_from_financing_activities_C: [
                {
                    colVal: 'Cash from Financing Activities (C)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        net_cash_flow_sum_ABC: [
            {
                colVal: 'Net Cash Flow (A+B+C)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        opening_cash_bank_balance: [
            {
                colVal: 'Add: Opening Cash/ Bank Balance',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        closing_cash_bank_balance: [
            {
                colVal: 'Closing Cash/ Bank Balance',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ]
    })

// States for Summary worksheet

    const [summRowSheet, setSummRowSheet] = useState({
        key_financial_assesments: {
            key_financial_assesments : [
                {
                    colVal: 'Key Financial Assesments',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            particulars : {
                particulars : [
                    {
                        colVal: 'Particulars',
                        rowSpan: 2,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    },
                ],
                year_label : [
                    {
                        colVal: '',
                        rowSpan: 1,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ]
            },
            sales : [
                {
                    colVal: 'Sales',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            percentage_change_in_sales : [
                {
                    colVal: '% Change in Sales',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            profit_after_tax : [
                {
                    colVal: 'Profit After Tax',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            net_profit_to_sales_ratio : [
                {
                    colVal: 'Net Profit to Sales Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            effective_net_worth : [
                {
                    colVal: 'Effective Net Worth',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            directors_loan_subordinated_loan : [
                {
                    colVal: 'Directors Loan/Subordinated Loan',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            paid_up_capital : [
                {
                    colVal: 'Paid-Up Capital',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            net_fixed_assets : [
                {
                    colVal: 'Net Fixed Assets',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            term_loan : [
                {
                    colVal: 'Term Loan',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            term_loan_to_net_fixed_assets : [
                {
                    colVal: 'Term Loan to Net Fixed Assets',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            net_current_asset_NCA : [
                {
                    colVal: 'Net Current Asset (NCA)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            working_capital_loan : [
                {
                    colVal: 'Working Capital Loan',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            working_capital_loan_to_NCA : [
                {
                    colVal: 'Working Capital Loan to NCA',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        empty_row_1 : [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        risk_grading : {
            risk_grading : [
                {
                    colVal: 'Risk Grading',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            particulars: {
                particulars : [
                    {
                        colVal: 'Particulars',
                        rowSpan: 2,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ],
                year_label : [
                    {
                        colVal: '',
                        rowSpan: 1,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ]
            },
            debt_to_equity : [
                {
                    colVal: 'Debt to Equity (in times of equity)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_conversion_cycle : [
                {
                    colVal: 'Cash Conversion Cycle',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            return_on_equity : [
                {
                    colVal: 'Return on Equity (ROE)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            gross_profit: [
                {
                    colVal: 'Gross Profit',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            projected_sales_of_above_FY : [
                {
                    colVal: 'Projected Sales of above FY',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            achievement_of_actual_sales_ASPS : [
                {
                    colVal: 'Achievement of actual sales against projected sales (AS/PS)',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        empty_row_2 : [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        key_ratios: {
            key_ratios : [
                {
                    colVal: 'Key Ratios',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            particulars : {
                particulars : [
                    {
                        colVal: 'Particulars',
                        rowSpan: 2,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ],
                year_label : [
                    {
                        colVal: '',
                        rowSpan: 1,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ]
            },
            debt_service_coverage_ratio : [
                {
                    colVal: 'Debt Service Coverage Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            interest_coverage_ratio : [
                {
                    colVal: 'Interest Coverage Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            debt_equity_ratio : [
                {
                    colVal: 'Debt Equity Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            leverage_ratio : [
                {
                    colVal: 'Leverage Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            current_ratio : [
                {
                    colVal: 'Current Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            sales_to_WCL_ratio : [
                {
                    colVal: 'Sales to Working Captial Loan Ratio',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            stock_turnover_period : [
                {
                    colVal: 'Stock Turnover Period',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            debtors_turnover_period : [
                {
                    colVal: 'Debtors Turnover Period',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            creditors_turnover_period : [
                {
                    colVal: 'Creditors Turnover Period',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            working_capital_cycle_period : [
                {
                    colVal: 'Working Capital Cycle Period',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        empty_row_3 : [
            {
                colVal: '',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        cash_flow : {
            cash_flow : [
                {
                    colVal: 'Cash Flow',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            particulars : {
                particulars : [
                    {
                        colVal: 'Particulars',
                        rowSpan: 2,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ],
                year_label : [
                    {
                        colVal: '',
                        rowSpan: 1,
                        colSpan: 1,
                        index: 0,
                        isReadOnly: true
                    }
                ]
            },
            cash_from_operating_activities : [
                {
                    colVal: 'Cash From Operating Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_from_investing_activities : [
                {
                    colVal: 'Cash From Investing Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            cash_from_financing_activities : [
                {
                    colVal: 'Cash From Financing Activities',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            net_cash_flow : [
                {
                    colVal: 'Net Cash Flow',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            closing_cash_bank_balance : [
                {
                    colVal: 'Closing Cash/ Bank Balance',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        }
    })

// States for dropdown (WCA) worksheet

    const [dropRowSheet, setDropRowSheet] = useState({
        particulars : {
            particulars : [
                {
                    colVal: 'Particulars',
                    rowSpan: 2,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ],
            year_label : [
                {
                    colVal: '',
                    rowSpan: 1,
                    colSpan: 1,
                    index: 0,
                    isReadOnly: true
                }
            ]
        },
        sales : [
            {
                colVal: 'Sales',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        stocks : [
            {
                colVal: '(A) Stocks',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        receivables : [
            {
                colVal: '(B) Receivables (stale to be excluded)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_CA_trade_advances : [
            {
                colVal: '(C) Other CA/ Trade Advances',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_current_assets : [
            {
                colVal: '(D) Total Current Assets (A+B+C)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        creditors : [
            {
                colVal: '(E) Less: Creditors',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_current_liabilities : [
            {
                colVal: '(F) Less: Other Current Liabilities',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        total_current_liabilities : [
            {
                colVal: '(G) Total Current Liabilities (E+F)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        net_working_capital_requirement : [
            {
                colVal: '(H) Net Working Capital Requirement (D-G)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        bank_finance : [
            {
                colVal: '(I) Bank Finance',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        nic_asia_bank : [
            {
                colVal: 'NIC Asia Bank',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        other_BFI : [
            {
                colVal: 'Other BFIs',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        equity_finance : [
            {
                colVal: 'Equity Finance (H-I)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        financing : [
            {
                colVal: 'Financing (%) (I/H)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ],
        approved_drawdown : [
            {
                colVal: 'Approved Drawdown (%)',
                rowSpan: 1,
                colSpan: 1,
                index: 0,
                isReadOnly: true
            }
        ]
    })

    // useEffect to initialize the years values
    useEffect(()=>{
        if (location.state) {
            setYears(prevState => ({
                ...prevState,
                ...location.state
            }))
        }
    },[])

    // useEffect for making the sheet panel fullScreen
    useEffect(() => {
        if (spreadsheetRef.current) {
            const sheetPanel = spreadsheetRef.current.querySelector('.e-sheet-panel');
            if (sheetPanel) {
                sheetPanel.style.height = '600px'; // Or any dynamic value
            }
        }
    }, []); 
    
    
// Logic for PL worksheet
    // useEffect to get the number of columns required per year
    useEffect(()=>{
        if (years && plSheetVals) {
            console.log(plSheetVals)
            setPlSheetKeys(Object.keys(plSheetVals))
        }
    },[plSheetVals, years])

    // for PLsheet values, prolly would be useful to keep around, when sending data to backend
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

    // useEffect for audited_projected row
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

//Logic for BSheet and ratios worksheet

    // useEffect to load all Bsheet values into the state 
    //TODO : to rename the parameters included in capital_and_liabilities and assets
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var mainColIndex = 1;
            var yearCounter = years.yearStart;
            let updates = {};
            for (let i=0; i < time_in_years; i++){
                updates[yearCounter] ={
                    index:mainColIndex,
                    audited_projected: null,
                    year_label:`${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                    capital_and_liabilities:{
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
                    assets:{
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
                    diff: null
                }

                yearCounter += 1;
                mainColIndex += 1;
            }
            setBsSheetVals(prevState => ({
                ...prevState,
                ...updates
            }))
        }
    },[years])

    // useEffect for counting number of columns in the sheet
    useEffect(() => {
        if (bsSheetVals && years) {
            console.log('BSheet : ', bsSheetVals)
            setBsSheetKeys(Object.keys(bsSheetVals))
        }
    },[bsSheetVals, years])

    // useEffect for audited/projected row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                audited_projected: [
                    ...prevState.audited_projected,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                year_label: [
                    ...prevState.year_label,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for capital and liabilities section row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                capital_and_liabilities: [
                    ...prevState.capital_and_liabilities,
                    ...update
                ]
            })) 
        }
    },[years])

    // share capital row value = 4
    // reserves and retained earnings row value = 5

    // useEffect of reserves and retained earnings row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=PL!${PLcol}21`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                reserves_and_retained_earnings: [
                    ...prevState.reserves_and_retained_earnings,
                    ...update
                ]
            })) 
        }
    },[years])


    // Directors Loan/Subordinated Loan row value = 6

    // useEffect for effective networth row 7
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            let shareCapRow = 4;
            // let reserveNretainedRow = 5;
            let directorsLoanRow = 6;

            for (let i = 0; i < time_in_years; i++) {
                var columnCharacterIndex = getSpreadsheetColumn(ColIndex);
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=SUM(${columnCharacterIndex}${shareCapRow}:${columnCharacterIndex}${directorsLoanRow})`
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                effective_networth: [
                    ...prevState.effective_networth,
                    ...update
                ]
            })) 
        }
    },[years])

    
    // long term loan row number 8
    // principal of LTL repaid row number 9
    
    // useEffect for total long term loan
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let LTLrow = 8;
            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex);
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=+${columnCharacterIndex}${LTLrow}`
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_long_term_loan: [
                    ...prevState.total_long_term_loan,
                    ...update
                ]
            })) 
        }
    },[years])
    
    // working capital loan row number 11
    // creditors row number 12
    // payables row number 13
    // other current liabilities and provisions 14
    
    // useEffect for total current liabilities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let WTLrow = 11;
            let otherCurrLiabAndProvRow = 14;
            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=SUM(${columnCharacterIndex}${WTLrow}:${columnCharacterIndex}${otherCurrLiabAndProvRow})`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_current_liabilities: [
                    ...prevState.total_current_liabilities,
                    ...update
                ]
            })) 
        }
    },[years])
    
    // useEffect for total capital and liabilities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let effectiveNetRow = 7;
            let totalLongTermLoanRow = 10;
            let totalCurrentLiabilitiesRow = 15;
            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=${columnCharacterIndex}${effectiveNetRow}+${columnCharacterIndex}${totalLongTermLoanRow}+${columnCharacterIndex}${totalCurrentLiabilitiesRow}`
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_capital_and_liabilities: [
                    ...prevState.total_capital_and_liabilities,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for empty row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                empty_row: [
                    ...prevState.empty_row,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffects for asset section
    // useEffect for empty asset header
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                assets: [
                    ...prevState.assets,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for total fixed assets row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;

            let landRow = 19;
            let otherFixedAssetsRow = 25;

            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=SUM(${columnCharacterIndex}${landRow}:${columnCharacterIndex}${otherFixedAssetsRow})`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_fixed_assets: [
                    ...prevState.total_fixed_assets,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for total long term investment row
    useEffect(()=>{
        if (years) {
            // 27 28
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;

            let investmentRow = 27;
            let otherIntangibleAssetsRow = 28;

            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=SUM(${columnCharacterIndex}${investmentRow}:${columnCharacterIndex}${otherIntangibleAssetsRow})`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_long_term_investments: [
                    ...prevState.total_long_term_investments,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for total current assets row
    useEffect(()=>{
        if (years) {
            // 30 -> 33 sum
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;

            let cashBankRow = 30;
            let otherCurrentAssetsRow = 33;

            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=SUM(${columnCharacterIndex}${cashBankRow}:${columnCharacterIndex}${otherCurrentAssetsRow})`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_current_assets: [
                    ...prevState.total_current_assets,
                    ...update
                ]
            })) 
        }
    },[years])

    // useEffect for total assets row
    useEffect(()=>{
        if (years) {
            //26 29 34
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;

            let totalFixedAssetsRow = 26;
            let totalLTIRow = 29;
            let totalCurrAssetsRow = 34;

            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=${columnCharacterIndex}${totalFixedAssetsRow}+${columnCharacterIndex}${totalLTIRow}+${columnCharacterIndex}${totalCurrAssetsRow}`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                total_assets: [
                    ...prevState.total_assets,
                    ...update
                ]
            })) 
        }
    },[years])

    //useEffect for diff calculation row
    useEffect(()=>{
        if (years) {
            //35 - 16
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;

            let totalAssetsRow = 35;
            let totalCapNliabRow = 16;

            let update = [];
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: `=ABS(${columnCharacterIndex}${totalAssetsRow}-${columnCharacterIndex}${totalCapNliabRow})`,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setBsRowSheet(prevState => ({
                ...prevState,
                diff: [
                    ...prevState.diff,
                    ...update
                ]
            })) 
        }
    },[years])

// useEffect logic for cashflow worksheet, whole sheet should be readonly

    // useEffect for load the data
    //TODO: to rename the parameters according to cashflow structure
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var mainColIndex = 1;
            var yearCounter = years.yearStart;
            let updates = {};
            for (let i=0; i < time_in_years; i++){
                updates[yearCounter] ={
                    index:mainColIndex,
                    audited_projected: null,
                    year_label:`${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                    capital_and_liabilities:{
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
                    assets:{
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
                    diff: null
                }

                yearCounter += 1;
                mainColIndex += 1;
            }
            setCfSheetVals(prevState => ({
                ...prevState,
                ...updates
            }))
        }
    },[years])

    // useEffect for the cashflow worksheet column count
    useEffect(() => {
        if (cfSheetVals && years) {
            console.log('CfSheet : ', cfSheetVals)
            setCfSheetKeys(Object.keys(cfSheetVals))
        }
    },[cfSheetVals, years])

    // useEffect for cashflow worksheet audited projected section
    // useEffect for audited projected field
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                audited_projected: {
                    ...prevState.audited_projected, 
                    audited_projected: [
                        ...prevState.audited_projected.audited_projected,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    //useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                audited_projected: {
                    ...prevState.audited_projected, 
                    year_label: [
                        ...prevState.audited_projected.year_label,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for cash from operating activities section
    // useEffect for cash from operating activities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    cash_from_operating_activities: [
                        ...prevState.cash_from_operating_activities.cash_from_operating_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for profit after tax
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                //17th row in PLSheet is net profit after tax
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=PL!${PLcol}17`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    profit_after_tax: [
                        ...prevState.cash_from_operating_activities.profit_after_tax,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for interest paid
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                //12th row in PLSheet is financial expenses / interest expenses
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=PL!${PLcol}12`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    interest_paid: [
                        ...prevState.cash_from_operating_activities.interest_paid,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for depreciation/amortization
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                //15th row in PLSheet is depreciation expenses
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=PL!${PLcol}15`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    depreciation_amortization: [
                        ...prevState.cash_from_operating_activities.depreciation_amortization,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for decrease increase in stock
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 31st row in Bsheet&Ratios contains information about store/stock
                // formula {prevYear}{31} - {currentYear}{31}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${prevBsheetCol}31-'BSheet & Ratios'!${BsheetCol}31`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    dec_inc_in_stock: [
                        ...prevState.cash_from_operating_activities.dec_inc_in_stock,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for decrease increase in receivable
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 32st row in Bsheet&Ratios contains information about debtors/receivable
                // formula {prevYear}{32} - {currentYear}{32}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${prevBsheetCol}32-'BSheet & Ratios'!${BsheetCol}32`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    dec_inc_in_receivables: [
                        ...prevState.cash_from_operating_activities.dec_inc_in_receivables,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for decrease increase in other current assets
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 33rd row in Bsheet&Ratios contains information about other current assets
                // formula {prevYear}{33} - {currentYear}{33}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${prevBsheetCol}33-'BSheet & Ratios'!${BsheetCol}33`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    dec_inc_in_other_current_assets: [
                        ...prevState.cash_from_operating_activities.dec_inc_in_other_current_assets,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for increase decrease in creditors
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 12th row in Bsheet&Ratios contains information about creditors
                // formula {currentYear}{12} - {prevYear}{12}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}12-'BSheet & Ratios'!${prevBsheetCol}12`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    inc_dec_in_creditors: [
                        ...prevState.cash_from_operating_activities.inc_dec_in_creditors,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for increase decrease in payable
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 13th row in Bsheet&Ratios contains information about payable
                // formula {currentYear}{13} - {prevYear}{13}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}13-'BSheet & Ratios'!${prevBsheetCol}13`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    inc_dec_in_payable: [
                        ...prevState.cash_from_operating_activities.inc_dec_in_payable,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for increase decrease in other current liabilities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            var prevBsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 14th row in Bsheet&Ratios contains information about other current liabilities
                // formula {currentYear}{14} - {prevYear}{14}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    let prevColIndex = ColIndex - 1;
                    BsheetCol = getSpreadsheetColumn(ColIndex);
                    prevBsheetCol = getSpreadsheetColumn(prevColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}14-'BSheet & Ratios'!${prevBsheetCol}14`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    inc_dec_in_other_current_liabilities: [
                        ...prevState.cash_from_operating_activities.inc_dec_in_other_current_liabilities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for loss gain on sale of fixed asset
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                //10th row in PLSheet is gain/ loss on sale of asset
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=PL!${PLcol}10*(-1)`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    loss_gain_on_sale_of_fixed_assets: [
                        ...prevState.cash_from_operating_activities.loss_gain_on_sale_of_fixed_assets,
                        ...update
                    ]
                }
            }))
        }
    },[years]) 

    // useEffect for cash from operating activities value, sum
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            // sum from row 4 to 13
            let pftAfterTaxRow = 4;
            let LGonSaleRow = 13;
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=SUM(${columnCharacterIndex}${pftAfterTaxRow}:${columnCharacterIndex}${LGonSaleRow})`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_operating_activities: {
                    ...prevState.cash_from_operating_activities, 
                    cash_from_operating_activities_A: [
                        ...prevState.cash_from_operating_activities.cash_from_operating_activities_A,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for empty row 1
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                empty_row_1: [
                    ...prevState.empty_row_1,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect logic for cash from investing activities section
    // useEffect for cash from investing activities row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_investing_activities: {
                    ...prevState.cash_from_investing_activities, 
                    cash_from_investing_activities: [
                        ...prevState.cash_from_investing_activities.cash_from_investing_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for sale (purchase) of fixed assets
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            // for PL sheet
            var temp;
            var PLcol;

            // for Bsheet
            var BsheetCol;
            var prevBsheetCol;

            for (let i = 0; i < time_in_years; i++) {
                
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)

                BsheetCol = getSpreadsheetColumn(ColIndex)
                prevBsheetCol = getSpreadsheetColumn(ColIndex - 1)

                //Balanced sheet 26th row -> total fixed asset
                //PL sheet 15th row -> depreciation expenses
                // formula : Bsheet!{currentYear}{26} + PL!{currentYear}{15} - Bsheet!{prevYear}{26}
                if (ColIndex === 1){
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}26 - PL!${PLcol}15 + 'BSheet & Ratios'!${prevBsheetCol}26`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_investing_activities: {
                    ...prevState.cash_from_investing_activities, 
                    sale_purchase_of_fixed_assets: [
                        ...prevState.cash_from_investing_activities.sale_purchase_of_fixed_assets,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for cash from investing activities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let salePurFixedAssetRow = 17;
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                if (ColIndex === 1){
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=${columnCharacterIndex}${salePurFixedAssetRow}`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_investing_activities: {
                    ...prevState.cash_from_investing_activities, 
                    cash_from_investing_activities_B: [
                        ...prevState.cash_from_investing_activities.cash_from_investing_activities_B,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for empty row 2
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                empty_row_2: [
                    ...prevState.empty_row_2,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for cash from financing activities section
    // useEffect for cash from financing activities header row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    cash_from_financing_activities: [
                        ...prevState.cash_from_financing_activities.cash_from_financing_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for increase in share capital
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            var BsheetCol;
            var prevBsheetCol;

            //balanced sheet 4th row is share capital
            //formula -> Bsheet!{currentYear}{4} - Bsheet!{prevYear}{4}
            for (let i = 0; i < time_in_years; i++) {
                BsheetCol = getSpreadsheetColumn(ColIndex);
                prevBsheetCol = getSpreadsheetColumn(ColIndex-1)
                
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                } 
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}4-'BSheet & Ratios'!${prevBsheetCol}4`
                        }
                    )
                }

                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    inc_in_share_capital: [
                        ...prevState.cash_from_financing_activities.inc_in_share_capital,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for drawing row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            //withdrawal/dividend/drawing in 19th row in PL worksheet
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            formula: ``,
                            isReadOnly: true
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            formula: `=-PL!${PLcol}19`,
                            isReadOnly: true
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    drawing: [
                        ...prevState.cash_from_financing_activities.drawing,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for increase decrease in loan from promoters
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            var BsheetCol;
            var prevBsheetCol;

            //balanced sheet 6th row is directors loan/ subordinated loan
            //formula -> Bsheet!{currentYear}{6} - Bsheet!{prevYear}{6}
            for (let i = 0; i < time_in_years; i++) {
                BsheetCol = getSpreadsheetColumn(ColIndex);
                prevBsheetCol = getSpreadsheetColumn(ColIndex-1)
                
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                } 
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}6-'BSheet & Ratios'!${prevBsheetCol}6`
                        }
                    )
                }

                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    inc_dec_in_loan_of_promoters: [
                        ...prevState.cash_from_financing_activities.inc_dec_in_loan_of_promoters,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for increase decrease in long term loan
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            var BsheetCol;
            var prevBsheetCol;

            //balanced sheet 8th row is long term loan
            //formula -> Bsheet!{currentYear}{8} - Bsheet!{prevYear}{8}
            for (let i = 0; i < time_in_years; i++) {
                BsheetCol = getSpreadsheetColumn(ColIndex);
                prevBsheetCol = getSpreadsheetColumn(ColIndex-1)
                
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                } 
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}8-'BSheet & Ratios'!${prevBsheetCol}8`
                        }
                    )
                }

                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    inc_dec_in_long_term_loan: [
                        ...prevState.cash_from_financing_activities.inc_dec_in_long_term_loan,
                        ...update
                    ]
                }
            }))
        }
    },[years])
    
    // useEffect for increase decrease in short term loan row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            var BsheetCol;
            var prevBsheetCol;

            //balanced sheet 11th row is working capital loan (stl)
            //formula -> Bsheet!{currentYear}{11} - Bsheet!{prevYear}{11}
            for (let i = 0; i < time_in_years; i++) {
                BsheetCol = getSpreadsheetColumn(ColIndex);
                prevBsheetCol = getSpreadsheetColumn(ColIndex-1)
                
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                } 
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}11-'BSheet & Ratios'!${prevBsheetCol}11`
                        }
                    )
                }

                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    inc_dec_in_short_term_loan: [
                        ...prevState.cash_from_financing_activities.inc_dec_in_short_term_loan,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for interest paid row, using 12th row in PL worksheet
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            //interest expenses in 12th row in PL worksheet
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            formula: ``,
                            isReadOnly: true
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            formula: `=-PL!${PLcol}12`,
                            isReadOnly: true
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    interest_paid: [
                        ...prevState.cash_from_financing_activities.interest_paid,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for cash from financing activities calculation row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            // sum from row 21 to 26
            let shareCapitalRow = 21;
            let interestPaidRow = 26;
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=SUM(${columnCharacterIndex}${shareCapitalRow}:${columnCharacterIndex}${interestPaidRow})`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                cash_from_financing_activities: {
                    ...prevState.cash_from_financing_activities, 
                    cash_from_financing_activities_C: [
                        ...prevState.cash_from_financing_activities.cash_from_financing_activities_C,
                        ...update
                    ]
                }
            }))
        }
    }, [years])

    // useEffect for net cash flow A+B+C row ->14 18 27
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            // sum from row 21 to 26
            let Arow = 14;
            let Brow = 18;
            let Crow = 27;
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=+${columnCharacterIndex}${Arow}+${columnCharacterIndex}${Brow}+${columnCharacterIndex}${Crow}`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                net_cash_flow_sum_ABC: [
                    ...prevState.net_cash_flow_sum_ABC,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for opening cash/ bank balance
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BsheetCol;
            for (let i = 0; i < time_in_years; i++) {
                // 30th row in Bsheet&Ratios contains information about cash/bank
                // formula =Bsheet!{currentYear}{30}
                if (ColIndex === 1) {
                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    BsheetCol = getSpreadsheetColumn(ColIndex);

                    update.push(
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `='BSheet & Ratios'!${BsheetCol}30`
                        }
                    )
                }

                ColIndex += 1;
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                opening_cash_bank_balance: [
                    ...prevState.opening_cash_bank_balance,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect closing cash/ bank balance
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];

            let netCFrow = 28;
            let openingCashRow = 29;
            var columnCharacterIndex;
            for (let i = 0; i < time_in_years; i++) {
                columnCharacterIndex = getSpreadsheetColumn(ColIndex)
                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=+${columnCharacterIndex}${netCFrow}+${columnCharacterIndex}${openingCashRow}`
                        }
                    )
                }
                ColIndex += 1
            }
            setCfRowSheet(prevState => ({
                ...prevState,
                closing_cash_bank_balance: [
                    ...prevState.closing_cash_bank_balance,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect(()=>{
    //     console.log('Cashflow row sheet : ', cfRowSheet)
    // },[cfRowSheet])

// useEffect for summary worksheet
    // useEffect for key financials assessment
    // useEffect for key financial assessment header row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: ``,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments,
                    key_financial_assesments : [
                        ...prevState.key_financial_assesments.key_financial_assesments,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for particulars row/ audited projected information
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    particulars: {
                        ...prevState.key_financial_assesments.particulars,
                        particulars: [
                            ...prevState.key_financial_assesments.particulars.particulars,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    particulars: {
                        ...prevState.key_financial_assesments.particulars,
                        year_label: [
                            ...prevState.key_financial_assesments.particulars.year_label,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for sales row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=PL!${PLcol}5`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    sales: [
                        ...prevState.key_financial_assesments.sales,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for percentage change in sales
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            var prevTemp;
            var prevPLcol;
            for (let i = 0; i < time_in_years; i++) {
                prevTemp = getOddNumberAtIndex(ColIndex-1)
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)
                prevPLcol = getSpreadsheetColumn(prevTemp)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=IFERROR((+PL!${PLcol}5-PL!${prevPLcol}5)/PL!${prevPLcol}5, "NA")`
                        }
                    )
                }

                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    percentage_change_in_sales: [
                        ...prevState.key_financial_assesments.percentage_change_in_sales,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for profit after tax row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=PL!${PLcol}17`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    profit_after_tax: [
                        ...prevState.key_financial_assesments.profit_after_tax,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for net profit to sales ratio
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var temp;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                temp = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(temp)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+PL!${PLcol}17)/PL!${PLcol}5, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    net_profit_to_sales_ratio: [
                        ...prevState.key_financial_assesments.net_profit_to_sales_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for effective net worth row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}7`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    effective_net_worth: [
                        ...prevState.key_financial_assesments.effective_net_worth,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for directors loan/ subordinated loan row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}6`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    directors_loan_subordinated_loan: [
                        ...prevState.key_financial_assesments.directors_loan_subordinated_loan,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for paid up capital row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}4`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    paid_up_capital: [
                        ...prevState.key_financial_assesments.paid_up_capital,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for net fixed assets row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}26`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    net_fixed_assets: [
                        ...prevState.key_financial_assesments.net_fixed_assets,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for term loan row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}10`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    term_loan: [
                        ...prevState.key_financial_assesments.term_loan,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for term loan to net fixed asset row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(${currCol}12/${currCol}11, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    term_loan_to_net_fixed_assets: [
                        ...prevState.key_financial_assesments.term_loan_to_net_fixed_assets,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for net current asset
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR('BSheet & Ratios'!${currCol}34-'BSheet & Ratios'!${currCol}12-'BSheet & Ratios'!${currCol}13-'BSheet & Ratios'!${currCol}14-'BSheet & Ratios'!${currCol}30, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    net_current_asset_NCA: [
                        ...prevState.key_financial_assesments.net_current_asset_NCA,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for working capital loan
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${PLcol}11`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    working_capital_loan: [
                        ...prevState.key_financial_assesments.working_capital_loan,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for working capital loan to NCA
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(${currCol}15/${currCol}14, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_financial_assesments: {
                    ...prevState.key_financial_assesments, 
                    working_capital_loan_to_NCA: [
                        ...prevState.key_financial_assesments.working_capital_loan_to_NCA,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for empty row 1
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                empty_row_1 : [
                    ...prevState.empty_row_1,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for Risk Grading section
    // useEffect for risk grading header row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: ``,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading,
                    risk_grading : [
                        ...prevState.risk_grading.risk_grading,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for particulars row/ audited projected row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    particulars: {
                        ...prevState.risk_grading.particulars,
                        particulars: [
                            ...prevState.risk_grading.particulars.particulars,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    particulars: {
                        ...prevState.risk_grading.particulars,
                        year_label: [
                            ...prevState.risk_grading.particulars.year_label,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for debt to equity row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(('BSheet & Ratios'!${currCol}8+'BSheet & Ratios'!${currCol}11)/('BSheet & Ratios'!${currCol}4+'BSheet & Ratios'!${currCol}5), "Input Error")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    debt_to_equity: [
                        ...prevState.risk_grading.debt_to_equity,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for cash conversion cycle row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR('BSheet & Ratios'!${currCol}31/PL!${PLcol}6*365+'BSheet & Ratios'!${currCol}32/PL!${PLcol}5*365-'BSheet & Ratios'!${currCol}12/PL!${PLcol}6*365, "Input Error")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    cash_conversion_cycle: [
                        ...prevState.risk_grading.cash_conversion_cycle,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for return on equity row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(PL!${PLcol}17/('BSheet & Ratios'!${currCol}4+'BSheet & Ratios'!${currCol}5), "Input Error")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    return_on_equity: [
                        ...prevState.risk_grading.return_on_equity,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for gross profit row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=PL!${PLcol}8`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    gross_profit: [
                        ...prevState.risk_grading.gross_profit,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for projected sales of the above FY row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: false,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    projected_sales_of_above_FY: [
                        ...prevState.risk_grading.projected_sales_of_above_FY,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for achievement of actual sales against projected sales AS/PS row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex);

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: false,
                        formula: `=IFERROR(${currCol}4/${currCol}25, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                risk_grading: {
                    ...prevState.risk_grading, 
                    achievement_of_actual_sales_ASPS: [
                        ...prevState.risk_grading.achievement_of_actual_sales_ASPS,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for empty row 2
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                empty_row_2 : [
                    ...prevState.empty_row_2,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for key ratios section
    // useEffect for key ratios header section
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: ``,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios,
                    key_ratios : [
                        ...prevState.key_ratios.key_ratios,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for particulars section/ audited projected row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    particulars: {
                        ...prevState.key_ratios.particulars,
                        particulars: [
                            ...prevState.key_ratios.particulars.particulars,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    particulars: {
                        ...prevState.key_ratios.particulars,
                        year_label: [
                            ...prevState.key_ratios.particulars.year_label,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect of debt service coverage ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((PL!${PLcol}17+PL!${PLcol}15+PL!${PLcol}12)/(PL!${PLcol}12+'BSheet & Ratios'!${currCol}9), "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    debt_service_coverage_ratio: [
                        ...prevState.key_ratios.debt_service_coverage_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for interest coverage ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(PL!${PLcol}22/PL!${PLcol}12, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    interest_coverage_ratio: [
                        ...prevState.key_ratios.interest_coverage_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for debt equity ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(('BSheet & Ratios'!${currCol}8+'BSheet & Ratios'!${currCol}11)/(Summary!${currCol}14+'BSheet & Ratios'!${currCol}26), "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    debt_equity_ratio: [
                        ...prevState.key_ratios.debt_equity_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for leverage ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(('BSheet & Ratios'!${currCol}10+'BSheet & Ratios'!${currCol}15)/'BSheet & Ratios'!${currCol}7, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    leverage_ratio: [
                        ...prevState.key_ratios.leverage_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for current ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+'BSheet & Ratios'!${currCol}34)/'BSheet & Ratios'!${currCol}15, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    current_ratio: [
                        ...prevState.key_ratios.current_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for sales to WCL ratio row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+PL!${PLcol}5)/'BSheet & Ratios'!${currCol}11, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    sales_to_WCL_ratio: [
                        ...prevState.key_ratios.sales_to_WCL_ratio,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for stock turnover period row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+'BSheet & Ratios'!${currCol}31)/PL!${PLcol}6*365, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    stock_turnover_period: [
                        ...prevState.key_ratios.stock_turnover_period,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for debtors turnover period
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+'BSheet & Ratios'!${currCol}32)/PL!${PLcol}5*365, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    debtors_turnover_period: [
                        ...prevState.key_ratios.debtors_turnover_period,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for creditors turnover period
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR((+'BSheet & Ratios'!${currCol}12)/PL!${PLcol}6*365, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    creditors_turnover_period: [
                        ...prevState.key_ratios.creditors_turnover_period,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // userEffect for working capital cycle period
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=IFERROR(+${currCol}37+${currCol}38-${currCol}39, "NA")`
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                key_ratios: {
                    ...prevState.key_ratios, 
                    working_capital_cycle_period: [
                        ...prevState.key_ratios.working_capital_cycle_period,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for empty row 3
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: ``
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                empty_row_3 : [
                    ...prevState.empty_row_3,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for cash flow section
    // useEffect for cash flow header
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        formula: ``,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow,
                    cash_flow : [
                        ...prevState.cash_flow.cash_flow,
                        ...update
                    ]
                }
            })) 
        }
    },[years])

    // useEffect for particulars section/ audited projected row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    particulars: {
                        ...prevState.cash_flow.particulars,
                        particulars: [
                            ...prevState.cash_flow.particulars.particulars,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    particulars: {
                        ...prevState.cash_flow.particulars,
                        year_label: [
                            ...prevState.cash_flow.particulars.year_label,
                            ...update
                        ]
                    }
                }
            }))
        }
    },[years])

    // useEffect for cash from operating activities
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=Cashflow!${currCol}14`
                        }
                    )
                }
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    cash_from_operating_activities: [
                        ...prevState.cash_flow.cash_from_operating_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for cash from investing activities row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=Cashflow!${currCol}18`
                        }
                    )
                }
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    cash_from_investing_activities: [
                        ...prevState.cash_flow.cash_from_investing_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for cash from financing activities row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=Cashflow!${currCol}27`
                        }
                    )
                }
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    cash_from_financing_activities: [
                        ...prevState.cash_flow.cash_from_financing_activities,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for net cash flow row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=Cashflow!${currCol}28`
                        }
                    )
                }
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    net_cash_flow: [
                        ...prevState.cash_flow.net_cash_flow,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for closing cash/ bank balance row
    useEffect(()=>{
        if (years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var currCol;
            for (let i = 0; i < time_in_years; i++) {
                currCol = getSpreadsheetColumn(ColIndex)

                if (ColIndex === 1) {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: ``
                        }
                    )
                }
                else {
                    update.push( 
                        {
                            colVal:  ``,
                            colSpan: 1,
                            rowSpan: 1,
                            index: ColIndex,
                            isReadOnly: true,
                            formula: `=Cashflow!${currCol}30`
                        }
                    )
                }
                ColIndex += 1
            }
            setSummRowSheet(prevState => ({
                ...prevState,
                cash_flow: {
                    ...prevState.cash_flow, 
                    closing_cash_bank_balance: [
                        ...prevState.cash_flow.closing_cash_bank_balance,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    useEffect(()=>{
        if (summRowSheet) {
            console.log('summRowSheet : ', summRowSheet)
        }
    },[summRowSheet])


// useEffect for dropdown (WCA) worksheet
    //useEffect for particulars section
    //useEffect for particulars row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal: 'Audited',
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                particulars: {
                    ...prevState.particulars,
                    particulars: [
                        ...prevState.particulars.particulars,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for year label row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            let yearCounter = years.yearStart;
            for (let i = 0; i < time_in_years; i++) {
                update.push( 
                    {
                        colVal:  `${yearCounter}/${(yearCounter + 1).toString().substr(-2)}`,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true
                    }
                )
                ColIndex += 1
                yearCounter += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                particulars: {
                    ...prevState.particulars,
                    year_label: [
                        ...prevState.particulars.year_label,
                        ...update
                    ]
                }
            }))
        }
    },[years])

    // useEffect for sales row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var PLcol;
            for (let i = 0; i < time_in_years; i++) {
                PLcol = getOddNumberAtIndex(ColIndex)
                PLcol = getSpreadsheetColumn(PLcol)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `=PL!${PLcol}5`
                    }
                )
                ColIndex += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                sales : [
                    ...prevState.sales,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for stock row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BSheetCol;
            for (let i = 0; i < time_in_years; i++) {
                BSheetCol = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${BSheetCol}31`
                    }
                )
                ColIndex += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                stocks : [
                    ...prevState.stocks,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for receivables row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BSheetCol;
            for (let i = 0; i < time_in_years; i++) {
                BSheetCol = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${BSheetCol}32`
                    }
                )
                ColIndex += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                receivables : [
                    ...prevState.receivables,
                    ...update
                ]
            }))
        }
    },[years])

    // useEffect for other CA/ Trade Advances row
    useEffect(()=>{
        if(years) {
            var time_in_years = years.yearEnd - years.yearStart + 1;
            var ColIndex = 1;
            let update = [];
            var BSheetCol;
            for (let i = 0; i < time_in_years; i++) {
                BSheetCol = getSpreadsheetColumn(ColIndex)
                update.push( 
                    {
                        colVal:  ``,
                        colSpan: 1,
                        rowSpan: 1,
                        index: ColIndex,
                        isReadOnly: true,
                        formula: `='BSheet & Ratios'!${BSheetCol}33`
                    }
                )
                ColIndex += 1
            }
            setDropRowSheet(prevState => ({
                ...prevState, 
                other_CA_trade_advances : [
                    ...prevState.other_CA_trade_advances,
                    ...update
                ]
            }))
        }
    },[years])

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

    const getOddNumberAtIndex = (index) => {
        // Generate the sequence of odd numbers up to the given index
        const oddSequence = [];
        for (let i = 1; i <= index * 2; i += 2) {
          oddSequence.push(i);
        }
      
        // Return the element at the given index
        return oddSequence[index - 1]; // Subtracting 1 because array indices start at 0
    }


    // const cellMapper = (address, colIndexs) => {
        
    // }


    return (
        <div ref={spreadsheetRef}>
            <SpreadsheetComponent style={{ minHeight: '500px' }} cellSave={handleCellSave}>
                <SheetsDirective>
                    <SheetDirective name='PL'>
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
                    <SheetDirective name='BSheet & Ratios'>
                        <RowsDirective>
                            {/*Capital and liabilities section */}
                            {/*audited/projected row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.audited_projected.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Year label row*/}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Capital and liabilities section row*/}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.capital_and_liabilities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Share capital row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.share_capital.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Reserves and Retained earnings row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.reserves_and_retained_earnings.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Directors Loan/ Subordinated Loan row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.directors_loan_subordinated_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Effective networth row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.effective_networth.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Long Term Loan (LTL) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.long_term_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*principal of LTL repaid during the year row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.principal_of_LTL_repaid_during_the_year.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Total long term loan row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_long_term_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Working Capital Loan row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.working_capital_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*creditors row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.creditors.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Payables row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.payables.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*other current liabilities and provisions row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.other_current_liabilities_and_provisions.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*total current liabilities */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_current_liabilities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*total capital and liabilities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_capital_and_liabilities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        colSpan={value.colSpan}
                                                        rowSpan={value.rowSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*Empty row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.empty_row.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*Assets section */}
                            {/*Assets header row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*land row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.land.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*building civil structure row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.building_civil_structure.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Plant/Machinery row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.plant_and_machinery.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/**furniture and fixtures row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.furniture_and_fixtures.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Office equipment row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.office_equipment.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Vehicles row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.vehicles.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*other fixed assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.other_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Total fixed assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Investment row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.investment.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*other intangible assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.other_intangible_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*total long term investment row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_long_term_investments.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Cash bank row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.cash_bank.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*store stock row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.store_stock.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*debtors recievables row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.debtors_receivables.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*other current assets */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.other_current_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*total current assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_current_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Total assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.total_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*Diff section */}
                            {/*Diff row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        bsRowSheet.diff.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        formula={value.formula}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={300} />
                            {
                                Object.keys(bsSheetVals).map((x, index)=>(
                                    <ColumnDirective key={index} width={100} />
                                ))
                            }
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name='Cashflow'>
                        <RowsDirective>
                            {/*Audited projected section */}
                            {/*Audited projected row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.audited_projected.audited_projected.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Year Label row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.audited_projected.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Cash from operating activities section */}
                            {/*Cash from operating activities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.cash_from_operating_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*profit after tax row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.profit_after_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*interest paid row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.interest_paid.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*depreciation amortization row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.depreciation_amortization.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*decrease increase in stock row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.dec_inc_in_stock.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*decrease increase in receivable */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.dec_inc_in_receivables.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*decrease increase in other current assets */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.dec_inc_in_other_current_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase decrease in creditors row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.inc_dec_in_creditors.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase decrease in payable */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.inc_dec_in_payable.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase decrease in other current liabilities */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.inc_dec_in_other_current_liabilities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*loss gain on sale of fixed assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.loss_gain_on_sale_of_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from operating activities A value row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_operating_activities.cash_from_operating_activities_A.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*empty row 1 */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.empty_row_1.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*Cash from investing activities section */}
                            {/*Cash from investing activities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_investing_activities.cash_from_investing_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*sale (purchase) of fixed assets */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_investing_activities.sale_purchase_of_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from investing activities row, sum */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_investing_activities.cash_from_investing_activities_B.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*empty row 2 */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.empty_row_2.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*cash from financing activities section */}
                            {/*cash from financing activities header row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.cash_from_financing_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase in share capital row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.inc_in_share_capital.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Drawing */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.drawing.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase decrease in loan of promoters */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.inc_dec_in_loan_of_promoters.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/* increase decrease in long term loan */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.inc_dec_in_long_term_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*increase decrease in short term loan */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.inc_dec_in_short_term_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*interest paid row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.interest_paid.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from financing activities C row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.cash_from_financing_activities.cash_from_financing_activities_C.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*net cash flow (A+B+C) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.net_cash_flow_sum_ABC.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*opening cash/bank balance row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.opening_cash_bank_balance.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*closing cash/bank balance row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        cfRowSheet.closing_cash_bank_balance.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
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
                            <ColumnDirective width={360} />
                            {
                                Object.keys(cfSheetVals).map(
                                    (x, index) => (
                                        <ColumnDirective key={index} width={100} />
                                    )
                                )
                            }
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name='Summary'>
                        <RowsDirective>
                            {/*Key financials assessment section */}
                            {/*Key financial assesment row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.key_financial_assesments.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*particulars section */}
                            {/*audited projected row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.particulars.particulars.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
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
                                        summRowSheet.key_financial_assesments.particulars.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*sales row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.sales.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*percentage change in sales row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.percentage_change_in_sales.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*profit after tax row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.profit_after_tax.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*net profit to sales ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.net_profit_to_sales_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*effective net worth row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.effective_net_worth.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*directors loan/ subordinated debt row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.directors_loan_subordinated_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*paid up capital row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.paid_up_capital.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*net fixed assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.net_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula} 
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*term loan row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.term_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*term loan to net fixed assets row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.term_loan_to_net_fixed_assets.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*net current asset (NCA) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.net_current_asset_NCA.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*working capital loan row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.working_capital_loan.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*working capital loan to NCA */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_financial_assesments.working_capital_loan_to_NCA.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*^^^ key financial assessment section over ^^^*/}

                            {/*Empty row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.empty_row_1.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*Risk Grading section */}
                            {/*Risk grading row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.risk_grading.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Particulars section */}
                            {/*particulars row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.particulars.particulars.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
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
                                        summRowSheet.risk_grading.particulars.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*debt to equity (in times of equity) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.debt_to_equity.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash conversion cycle row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.cash_conversion_cycle.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*return on equiry (ROE) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.return_on_equity.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
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
                                        summRowSheet.risk_grading.gross_profit.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*projected sales of above FY row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.projected_sales_of_above_FY.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Achievement of actual sales against projected sales (AS/PS) row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.risk_grading.achievement_of_actual_sales_ASPS.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*^^^ Risk grading section over ^^^*/}

                            {/*Empty row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.empty_row_2.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*key ratios section */}
                            {/*key ratios row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.key_ratios.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*particulars section */}
                            {/*particulars row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.particulars.particulars.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
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
                                        summRowSheet.key_ratios.particulars.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*debt service coverage ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.debt_service_coverage_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*interest coverage ration row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.interest_coverage_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*debt equity ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.debt_equity_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*leverage ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.leverage_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*current ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.current_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*sales to working capital loan ratio row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.sales_to_WCL_ratio.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*stock turnover period row*/}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.stock_turnover_period.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*debtors turnover period row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.debtors_turnover_period.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*creditors turnover period */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.creditors_turnover_period.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*working capital cycle period row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.key_ratios.working_capital_cycle_period.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*^^^ Key ratios section over ^^^*/}

                            {/*Empty row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.empty_row_3.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            
                            {/*Cash flow section */}
                            {/*cash flow row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.cash_flow.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*particulars section */}
                            {/*particulars row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.particulars.particulars.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
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
                                        summRowSheet.cash_flow.particulars.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from operating activities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.cash_from_operating_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from investing activities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.cash_from_investing_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*cash from financing activities row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.cash_from_financing_activities.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*net cash flow row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.net_cash_flow.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*closing cash/ bank balance row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        summRowSheet.cash_flow.closing_cash_bank_balance.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective 
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>

                            {/*^^^ cash flow section over ^^^*/}
                        </RowsDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={365} />
                                {
                                    Object.keys(cfSheetVals).map(
                                        (x, index) => (
                                            <ColumnDirective key={index} width={100} />
                                        )
                                    )
                                }
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name='% Drawdown (WCA)'>
                        <RowsDirective>
                            {/*Particulars section */}
                            {/*Particulars row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.particulars.particulars.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Year label row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.particulars.year_label.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*Sales row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.sales.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*(A) stocks row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.stocks.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*(B) receivables row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.receivables.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
                                                        formula={value.formula}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                </CellsDirective>
                            </RowDirective>
                            {/*(C) other CA/ Trade Advances row */}
                            <RowDirective>
                                <CellsDirective>
                                    {
                                        dropRowSheet.other_CA_trade_advances.map(
                                            (value, index) => {
                                                return (
                                                    <CellDirective
                                                        key={index}
                                                        index={value.index}
                                                        value={value.colVal}
                                                        rowSpan={value.rowSpan}
                                                        colSpan={value.colSpan}
                                                        isReadOnly={value.isReadOnly}
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
                            <ColumnDirective width={365} />
                                {
                                    Object.keys(cfSheetVals).map(
                                        (x, index) => (
                                            <ColumnDirective key={index} width={100} />
                                        )
                                    )
                                }
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
            {/* <button>
                Add Value
            </button> */}
            
        </div>
    );
}

export default Spreadsheet;
