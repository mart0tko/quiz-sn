import React, { useEffect, useState } from "react";
import "./Quiz.scss";
import { Question, RadioButtonQuiz, Timer } from "components";
import { QuizService } from "services";
import { Button } from "@ui5/webcomponents-react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  // Load Questions
  useEffect(() => {
    QuizService.getMockQuestions.then((data) => {
      setQuestions(data);
    });
  }, []);

  useEffect(() => {
    console.log("here");
  }, [questions]);

  const handleSubmit = () => {
    // Add submit functionality
    console.log(questions);
  };

  return (
    <div className="quiz">
      <div className="quiz__timer">
        <Timer minutes={60} onTimeOut={handleSubmit} />
        {/* Progress Indicator */}
      </div>
      <div className="quiz__questions">
        {questions.length &&
          questions.map((question, i) => (
            <Question key={question.id} data={question} />
          ))}
        {questions.length &&
          questions.map((question, i) => (
            <RadioButtonQuiz key={question.id} data={question}/>
          ))}
      </div>
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <br />
    </div>
  );
}
