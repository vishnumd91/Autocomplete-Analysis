import React, { useState } from "react";
// import dxAutocomplete from "devextreme/ui/autocomplete";
import Autocomplete from "devextreme-react/autocomplete";
import { CheckBox } from "devextreme-react/check-box";
import { names, surnames, positions, cities } from "../data";

export default function DevEXCustomizedAutoComplete() {
  const [localState, setLocalState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    position: positions[0],
    state: "",
  });

  const handleChange = (e) => {
    setLocalState({
      ...localState,
      [e.event.currentTarget.name]: e.event.currentTarget.value,
    });
  };
  const changeContent = (names) => {
    return (
      <div>
        <CheckBox defaultValue={false} />
        <p>{names}</p>
      </div>
    );
  };

  return (
    <div>
      <Autocomplete
        placeholder="With single selection checkbox"
        dataSource={names}
        onChange={handleChange}
        showClearButton={true}
        name="firstName"
        itemRender={changeContent}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}
