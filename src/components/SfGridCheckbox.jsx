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

const SfGridCheckbox = () => {
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
  let grid = new Grid({
    dataSource: empList,
    selectionSettings: { checkboxMode: "ResetOnRowClick" },
    columns: [
      { type: "checkbox", width: 50 },
      // {
      //   field: "OrderID",
      //   headerText: "Order ID",
      //   textAlign: "Right",
      //   width: 120,
      // },
      { field: "Name", headerText: "Customer ID", width: 150 },
      { field: "Designation", headerText: "Ship City", width: 150 },
      { field: "Country", headerText: "Ship Name", width: 150 },
    ],
  });

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

  grid.appendTo("#sample");

  return (
    <div id="grid" style={divStyle}>
      <GridComponent dataSource={empList} />
    </div>
  );
};

export default SfGridCheckbox;
