import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/users" component={Home}/>
        <Route exact path="/posts/:id" render={props => <Posts id={props.match.params.id}/>}/>
        <Route exact path="/comments/:id" render={props =><Comments id={props.match.params.id} />}/>
      </Switch>

  
    </div>
  );
}

export default App;
