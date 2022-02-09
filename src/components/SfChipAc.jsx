import React, { useRef, useState } from "react";
import {
  AutoCompleteComponent,
  MultiSelectComponent,
  CheckBoxSelection,
  Inject,
} from "@syncfusion/ej2-react-dropdowns";
import {
  CheckBoxComponent,
  ChipListComponent,
} from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";
import { divStyle } from "./DefaultAutoComplete";

const SfChipAc = () => {
  const [empList] = useState(data["empList"]);
  const [countryData] = useState(data["countryData"]);
  // let listObj = useRef(null);

  const itemTemplate = (data) => {
    console.log(data);
    return (
      <div className={divStyle}>
        {/* <table class="table table-borderless table-dark">
          <tbody>
            <tr style={{ border: "1px solid black" }}>
              <td>
                <CheckBoxComponent label={data.Name} />
              </td>
              <td>{data.Designation}</td>
              <td>{data.Name}</td>
            </tr>
          </tbody>
        </table> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">Col1</th> */}
              <td>{data.Name}</td>
              <td>{data.Designation}</td>
            </tr>
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>

        {/* <CheckBoxComponent
          label={data.Name}
          // labelPosition="Before"
          // checked={true}
        /> */}
        {/* <div className="ename"> {data.Name} </div>
          <div className="job"> {data.Designation} </div> */}
        {/* <p>{data.name}</p> */}
      </div>
    );
  };

  //   const [mode, setMode] = useState("Default");

  //   const changeMode = () => {
  //     setMode("Box");
  //   };

  // const headerTemplate = (data) => {
  //   return (
  //     <div className="header">
  //       {" "}
  //       <span>Photo</span> <span className="columnHeader">Employee Info</span>
  //     </div>
  //   );
  // };

  const changeValue = (data) => {
    return (
      <div>
        <ChipListComponent text={data.Name} />
      </div>
    );
  };

  return (
    <div style={divStyle}>
      <MultiSelectComponent
        id="chip-customization"
        dataSource={empList}
        fields={{ value: "Name" }}
        placeholder="without Select All"
        // itemTemplate={itemTemplate}
        popupWidth="500px"
        // headerTemplate={headerTemplate}
        // customValueSelection={changeValue}
        // focusOut={changeValue}
        // showSelectAll={true}
        mode="CheckBox"
        // onFocus={changeMode}
      >
        <Inject services={[CheckBoxSelection]} />
      </MultiSelectComponent>
    </div>
  );
};

export default SfChipAc;
