import React from "react";
import "./App.css";
import { Header, Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Segment clearing>
        <Header as="h2" floated="right">
          Float Right
        </Header>
        <Header as="h2" floated="left">
          Float Left
        </Header>
      </Segment>
    </div>
  );
}

export default App;
