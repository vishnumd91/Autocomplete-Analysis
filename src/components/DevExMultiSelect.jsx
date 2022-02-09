import React, { useState } from "react";
// import dxAutocomplete from "devextreme/ui/autocomplete";
import Autocomplete from "devextreme-react/autocomplete";
import { CheckBox } from "devextreme-react/check-box";

import { names, surnames, positions, cities } from "../data";
import DataGrid, {
  Selection,
  Paging,
  FilterRow,
  Scrolling,
} from "devextreme-react/data-grid";
import data from "../dataSource.json";
import { TagBox } from "devextreme-react";
import { divStyle } from "./DefaultAutoComplete";

export default function DevExMultiSelect() {
  const [localState, setLocalState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    position: positions[0],
    state: "",
    gridBoxValue: [3],
  });

  // const handleChange = (e) => {
  //   setLocalState({
  //     ...localState,
  //     [e.event.currentTarget.name]: e.event.currentTarget.value,
  //   });
  // };

  // const gridColumns = ["Name", "Designation", "Country"];

  // const dataGridOnSelectionChanged = (e) => {
  //   setLocalState({
  //     gridBoxValue: (e.selectedRowKeys.length && e.selectedRowKeys) || [],
  //   });
  // };

  // const changeContent = (names) => {
  //   console.log("names", names);
  //   return (
  //     <div>
  //       <DataGrid
  //         dataSource={data["empList"]}
  //         columns={gridColumns}
  //         hoverStateEnabled={true}
  //         selectedRowKeys={localState.gridBoxValue}
  //         onSelectionChanged={dataGridOnSelectionChanged}
  //       >
  //         <Selection mode="multiple" />
  //         <Scrolling mode="virtual" />
  //         {/* <Paging enabled={true} pageSize={10} /> */}
  //         {/* <FilterRow visible={true} /> */}
  //       </DataGrid>
  //     </div>
  //   );
  // };

  return (
    <div style={divStyle}>
      {/* <Autocomplete
        placeholder="With single selection checkbox"
        dataSource={data["sportsData"]}
        onChange={handleChange}
        showClearButton={true}
        name="firstName"
        itemRender={changeContent}
        style={{ marginTop: "20px" }}
      /> */}
      <TagBox
        searchEnabled={true}
        // items={data["countryData"]}
        dataSource={data["empList"]}
        valueExpr="Name"
        displayExpr="Name"
        showClearButton={true}
        showMultiTagOnly={false}
        maxDisplayedTags={3}
        placeholder="tagBox.."
        showSelectionControls={true}
        // hideSelectedItems={true}
        multiline={false}
        noDataText="No matching items were found"
        // itemRender={changeContent}
      />
    </div>
  );
}
