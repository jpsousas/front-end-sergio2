import React from 'react';
import Header from '../components/Header';
import { TableFuncionarios } from '../components/Funcionarios/TableFuncionarios.jsx';

export default function Home () {
    return(
        <div>
    <TableFuncionarios />
    <Header/>
    
        </div>
    );
}