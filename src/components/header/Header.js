import React from "react";
import { Button, Bar, Label, Switch } from "@ui5/webcomponents-react";
import { useHistory } from "react-router-dom";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

export default function App() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const hangleThemeChange = (oEvent) => {
    const bChecked = oEvent.target.checked;
    bChecked ? setTheme("sap_fiori_3") : setTheme("sap_fiori_3_dark");
   }

  return (
    <Bar design="Header" slot="header">
      <Button
        icon="home"
        title="Go home"
        slot="startContent"
        onClick={handleClick}
      ></Button>
      <Label>Service Now Quiz</Label>
      <Label slot="endContent">Theme: </Label>
      <Switch slot="endContent" onChange={hangleThemeChange}></Switch>
    </Bar>
  );
}
