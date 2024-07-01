import React from 'react';
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-react-spreadsheet';

function Test1() {
  return (
    <div>
      <SpreadsheetComponent style={{ minHeight: '500px' }}>
        <SheetsDirective>
          <SheetDirective>
            {/* Rows and columns setup */}
            <RowsDirective>
              {/* Row headings in Column A */}
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={0} value="Row Heading 1" />
                  {/* Merged cells for the first row */}
                  <CellDirective index={1} value="Merged Info 1" colSpan={2} />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={0} value="Row Heading 2" />
                  {/* Merged cells for the second row */}
                  <CellDirective index={1} value="Merged Info 2" colSpan={2} />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={0} value="Row Heading 3" />
                  {/* Merged cells for the third row */}
                  <CellDirective index={1} value="Merged Info 3" colSpan={2} />
                </CellsDirective>
              </RowDirective>
              {/* Subsequent rows with separate columns */}
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={0} value="Sub Heading 1" />
                  <CellDirective index={1} value="Sub Data 1" />
                  <CellDirective index={2} value="Sub Data 2" />
                </CellsDirective>
              </RowDirective>
              <RowDirective>
                <CellsDirective>
                  <CellDirective index={0} value="Sub Heading 2" />
                  <CellDirective index={1} value="Sub Data 3" />
                  <CellDirective index={2} value="Sub Data 4" />
                </CellsDirective>
              </RowDirective>
            </RowsDirective>
            <ColumnsDirective>
              <ColumnDirective width={120} />
              <ColumnDirective width={100} />
              <ColumnDirective width={100} />
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default Test1;
