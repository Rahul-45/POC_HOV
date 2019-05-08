import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class VPCTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColDef:{
        resizable:true
      },
      columnDefs: [{
        headerName: "Id", field: "id", headerClass: 'resizable-header',
      }, {
        headerName: "Name", field: "name",headerClass: 'resizable-header'
      }, {
        headerName: "Email", field: "email",headerClass: 'resizable-header'
      },
      {
        headerName:"Comment",field:"body",headerClass: 'resizable-header'
      },
      {
        headerName:"Post-Id",field:"postId",sizeColumnsToFit:true,headerClass: 'resizable-header'
      },
    ],
      rowData: this.props.data
    }
  }
  onFirstDataRendered = (params)=> {
    params.api.sizeColumnsToFit();
  }
  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '700px', 
        width: '200vh' 
        }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          enableSorting
          rowData={this.state.rowData}
          defaultColDef = {
            this.state.defaultColDef
            }
          onFirstDataRendered = {this.onFirstDataRendered}
          >

        </AgGridReact>
      </div>
    );
  }
}

export default VPCTable;