import React from "react";
import "./App.scss";
import { Header, ThreeColumnLayout } from "components";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "home/Home";
import Quiz from "quiz/Quiz";

function App() {
  return (
    <ThemeProvider withToastContainer>
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <ThreeColumnLayout center={<Home />}>

            </ThreeColumnLayout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
