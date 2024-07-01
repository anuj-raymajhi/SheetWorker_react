import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function YearEntry({yearVal, setYearVal, yearEnd, setYearEnd}){

    const navigate = useNavigate();

    const [buttonStatus, setButtonStatus] = useState(false)
    const [option, setOption] = useState([])
    const [endOption, setEndOption] = useState([])

    useEffect(()=>{
        for (let start = 2055; start <= 2098; start++){
            setOption(prevState => [
                ...prevState,
                { value: start, label: `${start}/${(start + 1).toString().substr(-2)}`}
            ])
        }
    },[])

    useEffect(()=>{
        if (yearVal && yearEnd){
            setButtonStatus(true)
        }
        else {
            setButtonStatus(false)
        }
    },[yearVal, yearEnd])

    useEffect(()=>{
        if (yearVal) {
            setEndOption(sliceYear(option, yearVal))
        }
    },[yearVal, option])

    const handleBeginClick = () => {
        navigate(`/spreadsheet`, {
            state:{
                yearStart: yearVal,
                yearEnd: yearEnd
            }
        })
    }

    const sliceYear = (lt, val) => {
        var temp;
        for (let i=0; i<lt.length; i++){
            if (lt[i].value === val){
                temp = i;
                break
            }
        }
        
        return lt.slice(temp+1, -1)
    }

    return (
        <>
            <div className="flex flex-col gap-y-5 w-full h-full">
                <div className="flex items-center justify-center font-bold text-3xl text-center m-4 h-[10vh]">
                    <h1>
                        Year Entry
                    </h1>
                </div>
                <div className="flex flex-col gap-y-3 justify-center items-center h-[80vh]">
                    <div className="font-semibold text-xl">
                        Select a Year to start
                    </div>
                    <div>
                        {/* empty div */}
                    </div>
                    <div className="flex w-[200px]">
                        <select
                            value={yearVal}
                            className="text-center w-full"
                            onChange={(e)=>setYearVal(parseInt(e.target.value))}
                        >   
                            <option value={null}>Select Year</option>
                            {option.map((opt, index)=>(
                                <option key={index} value={opt.value}>
                                    {opt.label} 
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="font-semibold text-xl">
                        Select End Year
                    </div>
                    <div>
                        {/* empty div */}
                    </div>
                    <div className="flex w-[200px]">
                        <select
                            value={yearEnd}
                            className="text-center w-full"
                            onChange={(e)=>setYearEnd(parseInt(e.target.value))}
                        >   
                            <option value={null}>Select Year</option>
                            {endOption.map((opt, index)=>{
                                    return (
                                        <option key={index} value={opt.value}>
                                            {opt.label} 
                                        </option>
                                    );
                            })}
                        </select>
                    </div>
                    <div className="flex w-[100px] items-center justify-center">
                        {buttonStatus&&(
                            // <Link to="/spreadsheet">
                            <button 
                                className="bg-bck-gray hover:bg-slate-200 pr-4 pl-4 pt-3 pb-3 rounded shadow-lg w-[80px] hover:text-blue-500"
                                onClick={handleBeginClick}
                            >
                                Begin
                            </button>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default YearEntry;