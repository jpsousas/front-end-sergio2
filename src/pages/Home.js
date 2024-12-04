import React from 'react';
import Header from '../components/Header';
import { TableFuncionarios } from '../components/Funcionarios/TableFuncionarios.jsx';

export default function Home() {
    return (
        <div>
            {/* Sidebar */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '250px',
                    height: '100%',
                    backgroundColor: '#333',
                    zIndex: 1000,
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
                }}
            >
                <Header />
            </div>

            {/* Tabela */}
            <div
                className="table-container"
                style={{
                    marginLeft: '250px', // Adiciona espaço para a sidebar
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <div className="ag-theme-quartz-dark" style={{ height: 1000 }}>
                    <TableFuncionarios />
                </div>
            </div>
        </div>
    );
}
