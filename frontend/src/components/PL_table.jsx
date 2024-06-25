function PL_Rows(){
    //static component to show the row values if PL sheet
    return (
     <>
        <div className="flex w-[332px] h-[750px] items-center justify-center">
            <div className="flex bg-bck-gray rounded overflow-hidden shadow-lg">
                <table className="flex w-[300px] h-[544px] m-4 items-center justify-center border-2">
                    <thead className="flex flex-col justify-left items-center text-sm">
                        <tr className="block h-[42px] border-b-2 w-full">
                            <div className="font-bold block text-center">
                                Audited/Projected?
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="font-bold text-left">
                                Capacity Utilization(if applicable)
                            </div>
                        </tr>
                        <tr className="block h-[24px] border-b-2">

                        </tr>
                        <tr className="block h-[23px] w-full border-y-2">
                            <div className="text-left">
                                Total Revenues/Sales
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Cost of goods sold
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Other direct expenses
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left font-bold">
                                Gross Profit
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Add: Other income
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Add/(Less): Gain/(Loss) on sale of asset
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Office/Administrative overhead
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Financial Expenses/Interest Exp
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Selling & Distribution Expenses
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left font-bold">
                                Profit before Depreciation & Tax
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Depreciation Expenses
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Income Tax
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left font-bold">
                                Net Profit After Tax
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Add: Profit upto last year
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Withdrawal/Dividend/Drawing
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left">
                                Less: Provision(if any)
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left font-bold">
                                Profit Transfered to Balanced Sheet
                            </div>
                        </tr>
                        <tr className="block h-[23px] w-full border-b-2">
                            <div className="text-left w-fit">
                                Earning Before Interest & Tax(EBIT)
                            </div>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
     </>   
    )
}

export default PL_Rows;