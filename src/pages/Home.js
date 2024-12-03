import React from 'react';
import Header from '../components/Header';
import { TableFuncionarios } from '../components/Funcionarios/TableFuncionarios.jsx';

export default function Home () {
    return(
    <div>
        <div>
    <Header />
        </div>

        <div className="ag-theme-quartz-dark"style={{height: 1000}}>
            <TableFuncionarios />
        </div>
    </div>
    );
}