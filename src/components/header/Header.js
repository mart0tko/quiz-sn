import React from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Button, Bar, Label } from "@ui5/webcomponents-react";
import "./Header.scss";

export default function App() {
  return (
    <Bar className="sn-header" design="Subheader">
      <Button icon="home" title="Go home" slot="startContent"></Button>
      <Label>Subheader Title</Label>
      <Button
        icon="action-settings"
        title="Go to settings"
        slot="endContent"
      ></Button>
    </Bar>
  );
}
