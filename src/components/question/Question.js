import React, { useEffect, useState } from "react";
import "./Question.scss";
import { CheckBox, Label } from "@ui5/webcomponents-react";

export default function Question({ data }) {
  const handleChange = (oEvent) => {
    const nOptionId = +oEvent.target.id;
    const bChecked = oEvent.target.checked;

    if (!data) {
      return;
    }

    // Create the array
    if (!data.answers) {
      data.answers = [];
    }

    const nIndex = data.answers.indexOf(nOptionId);

    // Save the ID
    if (bChecked && nIndex === -1) {
      data.answers.push(nOptionId);
    } else if (!bChecked && nIndex !== -1) {
      data.answers.splice(nIndex, 1);
    }
  };

  return (
    <div className="question">
      <br />
      <Label wrapping-type="Normal">{data.question}</Label>
      {data &&
        data.options.map((option) => {
          return (
            <CheckBox
              text={option.value}
              id={option.id}
              key={option.id}
              onChange={handleChange}
            />
          );
        })}
    </div>
  );
}
