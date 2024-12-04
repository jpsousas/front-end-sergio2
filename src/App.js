import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {HeaderFuncionarios} from './components/Funcionarios/Header.jsx';
import {HeaderHorarios} from './components/Horarios/Header.jsx';
import { TableFuncionarios } from './components/Funcionarios/TableFuncionarios.jsx';
import { useState } from 'react';


export default function App () {

    const [rowData, setRowData] = useState([
        { make: "Tesla", seg: "model y", ter: 64950, qua: true },
        { make: "Ford", model: "f-series", price: 44385, electric: false },
    ]);

    return (
        <div className="ag-theme-quartz-dark"style={{height: 1000}}>
            <HeaderFuncionarios/>
            <TableFuncionarios />
        </div>
    );
}
