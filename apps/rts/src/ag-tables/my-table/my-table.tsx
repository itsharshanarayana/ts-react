import styles from './my-table.module.css';
import React, {useCallback, useEffect, useRef, useState} from "react";

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export interface Car {
  make: string;
  model: string;
  price: number;
}

export interface ColumnDef {
  field: string;
  filter?: boolean;
}

/*export interface CarColumns {
  make: ColumnDef;
  model: ColumnDef;
  price: ColumnDef;
}*/

/*export interface ColumnDefs {
  columnDefs: ColumnDef[];
}*/

/* eslint-disable-next-line */
export interface MyTableProps {
  cars: Car[];
  colDefs: ColumnDef[];
}

const MyTable: React.FC<MyTableProps> = ({cars, colDefs}) => {
  /*const [rowData, setRowData] = useState<Car[]>([]);*/
  const [rowData, setRowData] = useState();
  const gridRef = useRef<any>(); // Optional - for accessing Grid's API

  /*const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model'},
    { field: 'price', filter: true},
  ]);*/

  const [columnDefs, setColumnDefs] = useState<ColumnDef[]>([]);

  /*const fetchData = async () => {
    const response = await fetch('https://www.ag-grid.com/example-assets/row-data.json')
    console.log(response.json);
    return response.json;
  }*/

  // Example load data from sever
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  const onLoad = () => {
    /*setRowData([]);*/
    setColumnDefs(colDefs);
  }

  // Example using Grid's API
  const buttonListener = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    gridRef.current.api.deselectAll();
  }, []);

  const cellClickedListener = useCallback( (event: any) => {
    console.log('cellClicked', event);
  }, []);


  const rowClickedListener = useCallback( (event: any) => {
    console.log('rowClicked', event.data);
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to MyTable!</h1>
      <br/>
      <div className="ag-theme-alpine" style={{height: 200, width: 600}}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          onNewColumnsLoaded={onLoad}
          animateRows={true}
          rowSelection='multiple'
          onCellClicked={cellClickedListener}
          onRowClicked={rowClickedListener}
        >
        </AgGridReact>
      </div>
      <button onClick={buttonListener}>Push Me</button>
    </div>
  );
}

export default MyTable;
