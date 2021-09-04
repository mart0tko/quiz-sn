import React from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Button, Bar, Label } from "@ui5/webcomponents-react";
import "./Header.scss";
import { APP_TITLE } from "../../constants";
import { useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Bar className="sn-header" design="Header" slot="header">
      <Button
        icon="home"
        title="Go home"
        slot="startContent"
        onClick={handleClick}
      ></Button>
      <Label>{APP_TITLE}</Label>
    </Bar>
  );
}
