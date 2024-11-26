/*import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { useState } from 'react';


export default function Grid () {

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "model y", price: 64950, electric: true },
        { make: "Ford", model: "f-series", price: 44385, electric: false },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ])


    return (
        <div className='ag-theme-quartz' style={{height: 500}}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    );
}
*/