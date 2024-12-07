import React from 'react';
import {HeaderFuncionarios} from './components/Funcionarios/Header.jsx';
import {HeaderHorarios} from './components/Horarios/Header.jsx';
import {TableFuncionarios} from './components/Funcionarios/TableFuncionarios.jsx';
import {TableHorarios} from './components/Horarios/TableHorarios.jsx';
import {useState} from 'react';


export default function App () {

    const [rowData, setRowData] = useState([
        { make: "Tesla", seg: "model y", ter: 64950, qua: true },
        { make: "Ford", model: "f-series", price: 44385, electric: false },
    ]);

    return (
        <div style={{height: 1000}}>
            <HeaderFuncionarios />
            <TableFuncionarios />
        <div>
            <HeaderHorarios/>
            <TableHorarios />
        </div>
        </div>
    );
}
