// import { useState } from 'react'
import { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import YearEntry from './pages/YearEntry';
import Test from './pages/Test';
import Test1 from './pages/test1';
import {registerLicense} from '@syncfusion/ej2-base';
import Spreadsheet from './components/SpreadSheet';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0Q3xbf1x0ZFNMYFpbQHRPMyBoS35RckVlW3lednRTQmNVUUFz')


function App() {

  const [yearEntry, setYearEntry] = useState(null)
  const [yearEnd, setYearEnd] = useState(null)
  const [yEntered, setYEntered] = useState(false)

  useEffect(()=>{
    if (yearEntry){
      setYEntered(true)
    }
  },[yearEntry])

  const router = createBrowserRouter([
    {
      path:'/home',
      element: <YearEntry yearVal={yearEntry} setYearVal={setYearEntry} yearEnd={yearEnd} setYearEnd={setYearEnd} />
    },
    {
      path:'/test',
      element: <Test />
    },
    {
      path:'/test1',
      element: <Test1 />
    },
    {
      path:'/spreadsheet',
      element: <Spreadsheet />
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
