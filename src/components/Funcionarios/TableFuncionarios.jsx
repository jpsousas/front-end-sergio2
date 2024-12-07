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
    { field: "other_actions", headerName: "Outras Ações"}
  ], []);
  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), []);

  useEffect(() => {
    fetch("http://localhost:8000/api/funcionarios-list")
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
