import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./components/Sessions/register";
import Login from "./components/Sessions/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
