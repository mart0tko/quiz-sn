import React from "react";
import "./App.scss";
import Header from "components/header/Header";
import { ThemeProvider, Button } from "@ui5/webcomponents-react";
import '@ui5/webcomponents/dist/Assets';
// import '@ui5/webcomponents-fiori/dist/Assets'; // only if you are using the ShellBar, Product Switch or the Upload Collection

function App() {
  return (
    <div className="App">
      <ThemeProvider withToastContainer>
        <Header />
        <Button>Test</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
