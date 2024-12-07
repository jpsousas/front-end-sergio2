import React from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {HeaderFuncionarios} from './components/Funcionarios/Header.jsx';
import {HeaderHorarios} from './components/Horarios/Header.jsx';
import {TableFuncionarios} from './components/Funcionarios/TableFuncionarios.jsx';
import {TableHorarios} from './components/Horarios/TableHorarios.jsx';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';


export default function App () {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Router>        
    );
}
