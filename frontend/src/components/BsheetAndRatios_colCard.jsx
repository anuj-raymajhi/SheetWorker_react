import { useEffect, useRef, useState } from "react";

function BsheetAndRatios_colCard({setEditFlag, year, setContext, context}){
    //useStates
    const [leftColValue, setLeftColValue] = useState({
        Audited_projected: null,
        Year: `${year}/${(year + 1).toString().substr(-2)}`,
        Share_Capital: null,
        Reserves_and_Retained_Earnings: null,
    })
    const [rightColValue, setRightColValue] = useState({

    })

    //refs
    const Share_CapitalRef = useRef(null)
    const Reserves_and_Retained_EarningsRef = useRef(null)

    //functions
    const updateLeftColValues = (key, value) => {
        setLeftColValue(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    //useEffects
    useEffect(() => {
        setEditFlag(true)
        if (context != null){
            if ('left' in context) setLeftColValue(context.left);
            if ('right' in context) setRightColValue(context.right);
        }
    },[])

    useEffect(()=>{
        setContext(prevState => ({
            ...prevState,
            [year]: {
                left:{...leftColValue},
                right:{...rightColValue}
            }
        }))
    },[leftColValue, rightColValue, year])



    return (
        <>
            <div className="flex flex-row gap-x-2 w-full h-full">
                <div className="w-1/2 h-full">
                {/*Balance sheet left column */}
                    <table className="bg-bck-gray rounded shadow-lg w-full h-full p-2">
                        <thead className="w-full h-full">
                            <tr className="w-full">
                                <th className="font-normal w-full pl-2 pr-2">
                                    <select 
                                        className="w-full rounded text-center text-sm"
                                        value={leftColValue.Audited_projected}
                                        onChange={(e)=>updateLeftColValues('Audited_projected', e.target.value)}
                                    >
                                        <option value={null} className='text-sm'>Audited/Projected</option>
                                        <option value="Audited" className='text-sm'>Audited</option>
                                        <option value="Projected" className='text-sm'>Projected</option>
                                    </select>
                                </th>
                            </tr>
                            <tr className="w-full">
                                <th className="font-normal w-full pl-2 pr-2 text-sm">
                                    {leftColValue.Year}
                                </th>
                            </tr>
                            <tr className="w-full">
                                <th className="font-normal w-full text-sm pl-2 pr-2 h-[31.19px]">
                                    
                                </th>
                            </tr>
                            <tr className="w-full">
                                <th className="font-normal w-full text-sm pl-2 pr-2">
                                    <input
                                        type="number"
                                        className="w-full rounded text-center text-sm"
                                        value={leftColValue.Share_Capital}
                                        ref={Share_CapitalRef}
                                        onClick={()=>{Share_CapitalRef.current.select()}}
                                        onChange={(e)=>updateLeftColValues('Share_Capital', parseFloat(e.target.value))}
                                    />
                                </th>
                            </tr>
                            <tr className="w-full">
                                <th className="font-normal w-full text-sm pl-2 pr-2">
                                    <input 
                                        type="number"
                                        className="w-full rounded text-center text-sm"
                                        value={leftColValue.Reserves_and_Retained_Earnings}
                                        ref={Reserves_and_Retained_EarningsRef}
                                        onClick={()=>{Reserves_and_Retained_EarningsRef.current.select()}}
                                        onChange={(e)=>updateLeftColValues('Reserves_and_Retained_Earnings', parseFloat(e.target.value))}
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="w-1/2 h-full">
                {/*Balance sheet right column */}
                    <table className="bg-bck-gray rounded shadow-lg w-full h-full">
                        <thead className="w-full h-full">
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    this
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
}   

export default BsheetAndRatios_colCard;