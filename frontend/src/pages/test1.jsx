import { SpreadsheetComponent, SheetsDirective, SheetDirective } from "@syncfusion/ej2-react-spreadsheet";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Test1() {
  const location = useLocation()

  const spreadsheetRef = useRef(null);

  const [years, setYears] = useState({})
  
  useEffect(()=>{
    if (location.state) {
      setYears(prevState => ({
          ...prevState,
          ...location.state
      }))
    }
  },[])

  useEffect(() => {
    if (spreadsheetRef.current) {
        const sheetPanel = spreadsheetRef.current.querySelector('.e-sheet-panel');
        if (sheetPanel) {
            sheetPanel.style.height = '700px'; // Or any dynamic value
        }
    }
  }, []); 

  return (
    <div ref={spreadsheetRef}>

    </div>
  );
}

export default Test1;
