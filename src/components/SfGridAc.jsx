import React, { useState } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";
import {
  MultiSelectComponent,
  CheckBoxSelection,
  Inject,
} from "@syncfusion/ej2-react-dropdowns";
import { Grid } from "@syncfusion/ej2-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";
import { divStyle } from "./DefaultAutoComplete";

const SfGridAc = () => {
  const [empList] = useState(data["empList"]);
  const datas = [
    {
      Name: "Andrew Fuller",
      Eimg: "7",
      Designation: "Team Lead",
      Country: "England",
    },
    // {
    //   Name: "Andrew Muller",
    //   Eimg: "7",
    //   Designation: "Teams",
    //   Country: "Spain",
    // },
  ];
  // const handleGrid = () => {
  // let grid = new Grid({
  //   dataSource: data,
  //   selectionSettings: { checkboxMode: "ResetOnRowClick" },
  //   columns: [
  //     { type: "checkbox", width: 50 },
  //     // {
  //     //   field: "OrderID",
  //     //   headerText: "Order ID",
  //     //   textAlign: "Right",
  //     //   width: 120,
  //     // },
  //     { field: "Name", headerText: "Customer ID", width: 150 },
  //     { field: "Designation", headerText: "Ship City", width: 150 },
  //     { field: "Country", headerText: "Ship Name", width: 150 },
  //   ],
  // });

  // return <Grid />;
  // };

  const handleChange = (data) => {
    return (
      <>
        <GridComponent dataSource={empList}>
          {/* <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Left" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Left" />
          <ColumnDirective
              field="Freight"
              width="100"
              format="C2"
              textAlign="Right"
            />
            <ColumnDirective field="ShipCountry" width="100" />
        </ColumnsDirective> */}
        </GridComponent>
        {/* <Inject services={[Page, Sort, Filter, Group]} /> */}
        {/* </GridComponent>
        <CheckBoxComponent /> */}
      </>

      // <table className="table table-striped">
      //   <tbody>
      //     <tr>
      //       {/* <th scope="row">Col1</th> */}
      //       <td>
      //         {/* <CheckBoxComponent label={data.Name} /> */}
      //         {data.Name}
      //       </td>
      //       <td>{data.Designation}</td>
      //       <td>{data.Country}</td>
      //     </tr>
      //   </tbody>
      // </table>
    );
  };
  const headerTemplate = (data) => {
    return (
      <div
      // style={{
      //   //   textAlign: "center",
      //   //   border: "1px solid black",
      //   //   height: "6rem",
      //   display: "flex",
      //   justifyContent: "space-around",
      // }}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Left" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Left" />
          {/* <ColumnDirective
              field="Freight"
              width="100"
              format="C2"
              textAlign="Right"
            />
            <ColumnDirective field="ShipCountry" width="100" /> */}
        </ColumnsDirective>
      </div>

      //       {/* <table className="table">
      //         <thead>
      //           <th>Name</th>
      //           <th>Designation</th>
      //           <th>Country</th>
      //         </thead>
      //       </table> */}
      //       {/* {" "}
      //       <span>Photo</span> <span className="columnHeader">Employee Info</span> */}
      //     </div>
      //   );
      // };
    );
  };
  const handleBlur = (e) => {
    console.log(empList);
  };

  const columnObject = [
    { type: "checkbox" },
    {
      field: "OrderID",
      headerText: "Order ID",
      textAlign: "Right",
      width: 120,
    },
    { field: "CustomerID", headerText: "Customer ID", width: 150 },
    { field: "ShipCity", headerText: "Ship City", width: 150 },
    { field: "ShipName", headerText: "Ship Name", width: 150 },
  ];

  // grid.appendTo("#grid");

  return (
    <div id="grid" style={divStyle}>
      {/* <Grid dataSource={empList} /> */}

      <MultiSelectComponent
        // id="Grid"
        dataSource={empList}
        fields={{ value: "Name" }}
        highlight={true}
        itemTemplate={handleChange}
        popupWidth="500px"
        placeholder="with Grid"
        // mode="CheckBox"
        // showSelectAll={true}
        addTagOnBlur={true}
        // dataBound={grid}
        // blur={handleBlur}
        headerTemplate={headerTemplate}
      >
        {/* <Inject services={[CheckBoxSelection]} /> */}
      </MultiSelectComponent>
    </div>
  );
};

export default SfGridAc;
