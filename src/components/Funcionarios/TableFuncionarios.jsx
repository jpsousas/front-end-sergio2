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
