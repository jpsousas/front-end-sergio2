import React, { useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export function TableFuncionarios() {
  const [rowData, setRowData] = useState ([
    {id: '1',nome: 'joao pedro',cargo: 'dev 1', dias_laborais: ['segunda','quarta','sexta'], horario_chegada: '05:30', horario_saida:'20:30'},
    {id: '2',nome: 'lucas medeiros',cargo: 'dev 2', dias_laborais: ['terca','quinta'], horario_chegada: '05:30', horario_saida:'20:30'},
    {id: '3',nome: 'henriwye alexandre',cargo: 'fazedor de jogo', dias_laborais: ['segunda','quarta','sexta'], horario_chegada: '05:30', horario_saida:'20:30'},
    {id: '4',nome: 'kaio vittor',cargo: 'webdev??', dias_laborais: ['segunda','quarta','sexta','sabado'], horario_chegada: '05:30', horario_saida:'20:30'}
  ]);

  const [columnDefs, setColumnDefs] = useState ([
    {field: 'id'},
    {field: 'nome'},
    {field: 'cargo'},
    {field: 'dias_laborais'},
    {field: 'horario_chegada'},
    {field: 'horario_saida'}
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
