// import { useState } from 'react'
import Home from './pages/Home'
import CardContainer from './components/CardContainer'
import colvals from './data/colValue.json'
import PL_Rows from './components/PL_table';

function App() {

  const cards = [
      { title: "Card 1", description: "Description for Card 1" },
      { title: "Card 2", description: "Description for Card 2" },
      { title: "Card 3", description: "Description for Card 3" },
      { title: "Card 1", description: "Description for Card 1" },
      { title: "Card 2", description: "Description for Card 2" },
      { title: "Card 3", description: "Description for Card 3" },
      // Add more cards as needed
    ];
  
  console.log(colvals)
  return (
    <>
      <div className='text-center m-4 text-3xl font-bold'>
        <h1 className='block'>PL sheet</h1>
      </div>
      <div className="flex justify-center items-center p-4 gap-x-5">
            <PL_Rows />
            <CardContainer cards={cards} />
      </div>
    </>
  )
}

export default App;
