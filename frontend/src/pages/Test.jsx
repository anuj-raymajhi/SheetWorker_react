import { useState } from "react";
import Bsheet_cardContainer from "../components/Bsheet_cardContainer";

function Test(){
    
    const data = [
        {value:2055, description:'what does a man want?'},
        {value:2056, description:'Hawkk'},
        {value:2057, description:'Thuuu'},
    ]

    return (
        <>
            <div className="flex flex-col gap-y-1 w-screen h-screen">
                <div className="flex items-center justify-center font-bold text-3xl text-center m-4 h-[10vh]">
                    <h1>
                        Bsheet and Ratios
                    </h1>
                </div>
                <div className="flex m-2 h-[85vh]">
                    <div className="flex w-1/3 p-2">
                    {/*Balance sheet left rows info */}

                    </div>
                    <div className="flex w-1/3 p-2">
                        <Bsheet_cardContainer cards={data} />
                    </div>
                    <div className="flex w-1/3 p-2">
                    {/*Balance sheet right rows info */}

                    </div>
                </div>
            </div>
        </>
    )
}   

export default Test;