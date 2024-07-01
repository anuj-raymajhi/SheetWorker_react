import { useState } from "react";
import BsheetAndRatios_colCard from "./BsheetAndRatios_colCard";
import {ToastContainer, toast} from 'react-toastify';

function Bsheet_cardContainer({cards}){
    const [currentYear, setCurrentYear] = useState(cards[0].value)
    const [editFlag, setEditFlag] = useState(true)
    const [context, setContext] = useState({})


    const handlePrevButton = () => {
        if (currentYear > cards[0].value){
            setCurrentYear(currentYear - 1)
        }
    }

    const handleNextButton = () => {
        if (currentYear < cards[cards.length - 1].value && !editFlag){
            setCurrentYear(currentYear+1)
        }
        console.log(context)
    }

    const handleSubmitButton = () => {
        setEditFlag(false)
    }

    return (
        <>
            <div className="flex flex-col gap-y-1 w-full">
                <div className="flex h-5/6 p-2">
                {/*div for bsheet and ratios column*/}
                    {cards.map((card, index)=>{
                        if (card.value === currentYear){
                            var currentYearContext;
                            if (card.value in context){
                                currentYearContext = context[currentYear]
                            }
                            else {
                                currentYearContext = null
                            }
                            return (
                                <div key={index} className="flex items-center justify-center w-full">
                                   <BsheetAndRatios_colCard setEditFlag={setEditFlag} year={card.value} setContext={setContext} context={currentYearContext}/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="flex flex-row justify-between items-center h-1/6">
                {/*div for buttons to change year*/}
                    <div className="flex justify-center items-center w-1/4">
                        <div className="flex w-full justify-center">
                            <button 
                                className={`w-full bg-bck-gray rounded shadow-lg p-4 hover:bg-blue-300`}
                                onClick={handlePrevButton}
                            >
                                Prev
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4 h-1/2 items-center justify-center">
                        <div className="flex h-1/2 items-center rounded">
                            <span className="block">
                                {`${currentYear}/${(currentYear + 1).toString().substr(-2)}`}
                            </span>
                        </div>
                        <div className="flex h-1/2 items-center justify-center w-full">
                            <button 
                                className="flex bg-bck-gray rounded shadow-lg text-sm py-1 px-4 hover:bg-lime-300"
                                onClick={handleSubmitButton}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="flex w-1/4 items-center justify-center">
                        <div className="flex w-full justify-center">
                            <button 
                                className={`w-full bg-bck-gray rounded shadow-lg p-4 hover:bg-blue-300 ${editFlag? 'cursor-not-allowed':''}`}
                                onClick={handleNextButton}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bsheet_cardContainer;