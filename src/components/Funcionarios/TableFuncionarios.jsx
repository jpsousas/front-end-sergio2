import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export function TableFuncionarios() {
  const [rowData, setRowData] = useState ([]);

  const [columnDefs, setColumnDefs] = useState ([
    {field: 'id'},
    {field: 'nome'},
    {field: 'cargo'},
  ]);
  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), []);
//  useEffect(() => {
//    fetch('url api dos guri')
//    .then(result => result.json())
//    .then(rowData => setRowData(rowData))
//  }, []);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/funcionarios/")
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
