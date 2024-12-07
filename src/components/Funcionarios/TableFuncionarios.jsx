import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export function TableFuncionarios() {
  const [rowData, setRowData] = useState ([]);

  const columnDefs = useMemo(() => [
    { field: "id", headerName: "ID" },
    { field: "nome", headerName: "Nome" },
    { field: "cargo", headerName: "Cargo" },
    { 
      field: "other_actions",
      headerName: "Outras Ações",
      cellRenderer: (params) => (
        <div>
          <button onClick={() => handleEdit(params.data.id, params.data.nome, params.data.cargo)} style={{marginRight: "20px"}}>✏️</button>
          <button onClick={() => handleDelete(params.data.id, params.data.nome, params.data.cargo)}>🗑️</button>
        </div>
      ),
    },
  ], []);
  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), []);

  const handleDelete = (id, nome, cargo) => {
    console.log(`tentativa de DELETE de ${id} ${nome} ${cargo}`);
  }
  const handleEdit = (id, nome, cargo) => {
    console.log(`tentativa de EDIT de ${id} ${nome} ${cargo}`);
  }
  //get de todos os funcionarios no banco
  useEffect(() => {
    fetch("http://localhost:8000/api/funcionarios/")
      .then((response) => {
        console.log("Status da resposta:", response.status);
        console.log("Conteúdo bruto:", response);
        return response.json(); // Certifique-se de que é JSON
      })
      .then((data) => {
        console.log("Dados recebidos:", data);
        setRowData(data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);
  
  
  return (
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
      rowSelection='multiple'
      animateRows={true}
      />
  );
}
