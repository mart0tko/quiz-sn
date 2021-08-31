import React from "react";
import "./ThreeColumnLayout.scss";

export default function ThreeColumnLayout({
  left,
  center,
  right,
}) {
  return (
    <div className="tree-column-layout">
      <div className="tree-column-layout__column tree-column-layout--flex-1">{left}</div>
      <div className="tree-column-layout__column tree-column-layout--flex-2">{center}</div>
      <div className="tree-column-layout__column tree-column-layout--flex-1">{right}</div>
    </div>
  );
}
