import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { useState } from 'react';


export default function App () {

    const [rowData, setRowData] = useState([
        { make: "Tesla", seg: "model y", ter: 64950, qua: true },
        { make: "Ford", model: "f-series", price: 44385, electric: false },
    ]);

    const [colDefs, setColDefs] = useState([
        { 
          field: "Horário",
          flex: 1,
          lockPosition: "left",
          editable: true,
          cellStyle: {color: "blue"} 
        },
        { field: "Seg", flex: 1 },
        { field: "Ter", flex: 1 },
        { field: "Qua", flex: 1 },
        { field: "Qui", flex: 1 },
        { field: "Sex", flex: 1 },
        { field: "Sab", flex: 1 },
    ])


    return (
        <div className="ag-theme-quartz-dark"style={{height: 1000}}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    );
}
