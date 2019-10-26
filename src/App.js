import React from "react";
import "./App.css";
import PostList from "./component/PostList";
import LoginForm from "./component/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./component/RegisterForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/dashboard" component={PostList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
