// import { useState } from 'react'
import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PL_sheet from './pages/PL_sheet';
import YearEntry from './pages/YearEntry';

function App() {

  const [yearEntry, setYearEntry] = useState(null)
  const [yEntered, setYEntered] = useState(false)

  useEffect(()=>{
    if (yearEntry){
      setYEntered(true)
    }
  },[yearEntry])

  const router = createBrowserRouter([
    {
      path:'/home',
      element: <YearEntry yearVal={yearEntry} setYearVal={setYearEntry} />
    },
    {
      path:'/pl-sheet',
      element: <PL_sheet yearEntered={yearEntry} />
    }
  ])
  
  return (
    // <>
    //   <YearEntry yearVal={yearEntry} setYearVal={setYearEntry}/>
    // </>
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
