import React from "react";
import DefaultAutoComplete from "./components/DefaultAutoComplete";
import "./App.css";
import "devextreme/dist/css/dx.light.css";
import MultiSelect from "./components/MultiSelect";
import TemplateAutoComplete from "./components/TemplateAutoComplete/TemplateAutoComplete";
import DevExDefaultAutoComplete from "./components/DevExDefaultAutoComplete";
import DevEXCustomizedAutoComplete from "./components/DevEXCustomizedAutoComplete";
import SfCustomAc from "./components/SfCustomAc";
import SfChipAc from "./components/SfChipAc";
import SfSelectAll from "./components/SfSelectAll";
import SfGridAc from "./components/SfGridAc";
import DevExMultiSelect from "./components/DevExMultiSelect";
import DevExGridSelection from "./components/DevExGridSelection";

const App = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center", marginTop: "0px" }}>
        SyncFusion vs DevExtreme AutoComplete
      </h1> */}
      <div style={{ float: "left", width: "300px" }}>
        <span>SyncFusion AutoComplete</span>
        <DefaultAutoComplete />
        <MultiSelect />
        <TemplateAutoComplete />
        <SfCustomAc />
        <SfChipAc />
        <SfSelectAll />
        <SfGridAc />
      </div>
      <div style={{ float: "right", width: "500px" }}>
        <span>DevExtreme AutoComplete</span>
        <DevExDefaultAutoComplete />
        <DevEXCustomizedAutoComplete />
        <DevExMultiSelect />
        <DevExGridSelection />
      </div>
    </div>
  );
};

export default App;
