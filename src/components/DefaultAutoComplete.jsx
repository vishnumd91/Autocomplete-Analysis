import React, { useRef, useState } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";

export const divStyle = {
  marginTop: 20,
  width: 500,
};

const DefaultAutoComplete = () => {
  const [countryData] = useState(data["countryData"]);
  //   let listObj = useRef(null);

  //   const handleChange = (args) => {
  //     console.log(args);
  //   };

  return (
    <div style={divStyle}>
      <AutoCompleteComponent
        id="atcelement"
        dataSource={countryData}
        fields={{ value: "Name" }}
        highlight={true}
        popupWidth="500px"
        placeholder="e.g. Poland"
        style={{ marginTop: "20px" }}
        //   showPopupButton={true}
      />
      {/* <CheckBoxComponent
              checked={true}
              label="Autofill"
              change={handleChange(this)}
            /> */}
    </div>
  );
};

export default DefaultAutoComplete;
