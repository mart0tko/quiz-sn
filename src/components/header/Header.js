import React from "react";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";
import "@ui5/webcomponents-fiori/dist/ShellBar";

export default function App() {
  return (
    <>
      <ui5-shellbar primary-title="Service Now" secondary-title="Quizes">
        <ui5-button
          icon="menu"
          slot="startButton"
          id="startButton"
        ></ui5-button>
      </ui5-shellbar>
      <ui5-side-navigation>
        <ui5-side-navigation-item
          text="Home"
          icon="home"
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item text="People" expanded icon="group">
          <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
          <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
        </ui5-side-navigation-item>
        <ui5-side-navigation-item
          text="Locations"
          icon="locate-me"
          selected
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item text="Events" icon="calendar">
          <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
          <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
        </ui5-side-navigation-item>

        <ui5-side-navigation-item
          slot="fixedItems"
          text="Useful Links"
          icon="chain-link"
        ></ui5-side-navigation-item>
        <ui5-side-navigation-item
          slot="fixedItems"
          text="History"
          icon="history"
        ></ui5-side-navigation-item>
      </ui5-side-navigation>
    </>
  );
}
