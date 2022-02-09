import React, { useRef, useState } from "react";
import {
  AutoCompleteComponent,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";
import { divStyle } from "./DefaultAutoComplete";

const MultiSelect = () => {
  const [countryData] = useState(data["countryData"]);

  return (
    <div style={divStyle}>
      <MultiSelectComponent
        dataSource={countryData}
        fields={{ value: "Name" }}
        placeholder="MultiSelect 10k data"
        popupWidth="500px"
      >
        <CheckBoxComponent checked={true} label="Autofill" />
      </MultiSelectComponent>
    </div>
  );
};

export default MultiSelect;
