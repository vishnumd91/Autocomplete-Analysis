import React, { useRef, useState } from "react";
import {
  AutoCompleteComponent,
  MultiSelectComponent,
  Inject,
  CheckBoxSelection,
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import data from "../dataSource.json";
import { divStyle } from "./DefaultAutoComplete";

const SfSelectAll = () => {
  const [empList] = useState(data["empList"]);
  const [countryData] = useState(data["countryData"]);

  return (
    <div style={divStyle}>
      <MultiSelectComponent
        id="employees"
        dataSource={empList}
        fields={{ value: "Name" }}
        placeholder="with Select All"
        popupWidth="500px"
        showSelectAll={true}
        mode="CheckBox"
        // headerTemplate={headerTemplate}
      >
        <Inject services={[CheckBoxSelection]} />
      </MultiSelectComponent>
    </div>
  );
};

export default SfSelectAll;
