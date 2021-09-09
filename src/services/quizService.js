import axios from "axios";

const QuizService = {
  getMockQuestions: axios.get("mock-data.json").then((data) => data.data)
};

export default QuizService;
