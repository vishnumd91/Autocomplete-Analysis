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

export default function DevExGridSelection() {
  const [localState, setLocalState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    position: positions[0],
    state: "",
    gridBoxValue: [3],
  });

  const gridColumns = ["Name", "Designation", "Country"];

  const dataGridOnSelectionChanged = (e) => {
    console.log("names", e);
    setLocalState({
      gridBoxValue: (e.selectedRowKeys.length && e.selectedRowKeys) || [],
    });
  };

  const changeContent = (names) => {
    return (
      <div>
        <DataGrid
          dataSource={data["empList"]}
          columns={gridColumns}
          hoverStateEnabled={true}
          selectedRowKeys={localState.gridBoxValue}
          onSelectionChanged={dataGridOnSelectionChanged}
        >
          <Selection mode="multiple" />
          <Scrolling mode="virtual" />
          {/* <Paging enabled={true} pageSize={10} /> */}
          {/* <FilterRow visible={true} /> */}
        </DataGrid>
      </div>
    );
  };

  return (
    <div style={divStyle}>
      <TagBox
        searchEnabled={true}
        dataSource={data["empList"]}
        // items={data["empList"]}
        valueExpr="Name"
        displayExpr="Name"
        showClearButton={true}
        placeholder="tagBox with Grid.."
        // showSelectionControls={true}
        hideSelectedItems={true}
        multiline={false}
        itemRender={changeContent}
      />
    </div>
  );
}
