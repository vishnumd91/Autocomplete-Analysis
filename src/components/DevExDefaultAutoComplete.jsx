import React, { useState } from "react";
// import dxAutocomplete from "devextreme/ui/autocomplete";
import Autocomplete from "devextreme-react/autocomplete";
import { names, surnames, positions, cities } from "../data";
import data from "../dataSource.json";

export default function DevExDefaultAutoComplete() {
  const [localState, setLocalState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    position: positions[0],
    state: "",
  });
  console.log(data);

  const handleChange = (e) => {
    setLocalState({
      ...localState,
      [e.event.currentTarget.name]: e.event.currentTarget.value,
    });
  };

  return (
    <div>
      <Autocomplete
        placeholder="Basic AutoComplete"
        dataSource={data["countryData"]}
        // width="500"
        onChange={handleChange}
        showClearButton={true}
        valueExpr="Name"
        name="firstName"
        style={{ marginTop: "20px" }}
      />
      {/* <Autocomplete
        placeholder="Type anything..."
        dataSource={cities}
        onChange={handleChange}
        name="lastName"
        showClearButton={true}
        style={{ marginTop: "20px" }}
      />
      <Autocomplete
        placeholder="Type anything..."
        dataSource={positions}
        onChange={handleChange}
        name="position"
        value={localState.position}
        showClearButton={true}
        style={{ marginTop: "20px" }}
        disabled={true}
      /> */}
    </div>
  );
}
