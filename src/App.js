import React from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import "./App.css";


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
