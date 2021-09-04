import React from "react";
import { Button } from "@ui5/webcomponents-react";
import { useHistory } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const history = useHistory();
  const onButtonClick = () => {
    history.push("/quiz");
  };
  return (
    <div className="home">
      <Button onClick={onButtonClick}>Start Quiz</Button>
    </div>
  );
}
