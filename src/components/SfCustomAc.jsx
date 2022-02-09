import React, { useRef, useState } from "react";
import {
  AutoCompleteComponent,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";
import { divStyle } from "./DefaultAutoComplete";

const SfCustomAc = () => {
  const [empList] = useState(data["empList"]);
  const [countryData] = useState(data["countryData"]);
  // let listObj = useRef(null);

  const itemTemplate = (data) => {
    return (
      <div>
        {/* <img
          className="empImage"
          src={
            "https://ej2.syncfusion.com/react/demos/src/auto-complete/Employees/" +
            data.Eimg +
            ".png"
          }
          alt="employee"
        /> */}
        <CheckBoxComponent
          label={data.Name}
          // labelPosition="Before"
          // checked={true}
        />
        {/* <div className="ename"> {data.Name} </div>
          <div className="job"> {data.Designation} </div> */}
        {/* <p>{data.name}</p> */}
      </div>
    );
  };

  // const headerTemplate = (data) => {
  //   return (
  //     <div className="header">
  //       {" "}
  //       <span>Photo</span> <span className="columnHeader">Employee Info</span>
  //     </div>
  //   );
  // };

  return (
    <div style={divStyle}>
      <MultiSelectComponent
        id="employees"
        dataSource={empList}
        fields={{ value: "Name" }}
        placeholder="with mode as Box"
        itemTemplate={itemTemplate}
        popupWidth="500px"
        mode="Box"
        // headerTemplate={headerTemplate}
      />
    </div>
  );
};

export default SfCustomAc;
