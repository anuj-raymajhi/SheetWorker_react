import { useState, useEffect } from 'react';
import CardContainer from '../components/CardContainer'
import PL_Rows from '../components/PL_table';

function PL_sheet({yearEntered}){

    const [cards, setCards] = useState([
        {value:yearEntered},
    ])

    const handleAddYear = () => {
        const newCard = {value:cards[cards.length-1].value+1}
        setCards([...cards, newCard])
    }

    const handleRemoveYear = () => {
        if (cards.length > 1) {
            setCards(cards.slice(0, -1))
        }
    }


    return (
        <>
          <div className='text-center m-4 text-3xl font-bold'>
            <h1 className='block'>PL sheet</h1>
          </div>
          <div className="flex justify-between items-center p-2 gap-x-5 pl-14 pr-14">
                <PL_Rows />
                <CardContainer cards={cards} />
                <div className='flex flex-col gap-y-4'>
                    <button className='bg-bck-gray p-3 rounded shadow-lg hover:bg-blue-300' onClick={handleAddYear}>
                        Add year
                    </button>
                    <button className='bg-bck-gray p-3 rounded shadow-lg hover:bg-red-300' onClick={handleRemoveYear}>
                        Remove year
                    </button>
                    <button className='bg-bck-gray p-3 rounded shadow-lg hover:bg-lime-300'>
                        Submit
                    </button>
                </div>
          </div>
        </>
      )
}

export default PL_sheet;