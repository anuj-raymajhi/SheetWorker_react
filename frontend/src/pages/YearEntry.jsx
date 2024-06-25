import { Link } from "react-router-dom";

function YearEntry({yearVal, setYearVal}){



    let option = []

    for (let year = 2055; year <= 2100; year++) {
        option.push({ value: year, label: `${year}/${(year + 1).toString().substr(-2)}` });
    }

    const handleBegin = () => {

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
                    <div className="flex w-[100px] items-center justify-center">
                        <Link to="/pl-sheet">
                            <button 
                                className="bg-bck-gray hover:bg-slate-200 pr-4 pl-4 pt-3 pb-3 rounded shadow-lg w-[80px] hover:text-blue-500"
                                onClick={handleBegin}
                            >
                                Begin
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YearEntry;