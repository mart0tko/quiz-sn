import React from "react";
import { RadioButton, Label } from "@ui5/webcomponents-react";
import "./RadioButtonQuiz.scss";

export default function RadioButtonQuiz({ data }) {
  const handleChange = (oEvent) => {
    const nOptionId = +oEvent.target.id;
    data.answers = nOptionId;
    console.log(data);
  };
  return (
    <div id="radioGroup2" className="radio-button-quiz">
      <br />
      <Label>{data.question}</Label>
      {data &&
        data.options.map((option) => {
          return (
            <RadioButton
              text={option.value}
              id={option.id}
              key={option.id}
              name={`${data.id}-question`}
              onChange={handleChange}
            />
          );
        })}
    </div>
  );
}
