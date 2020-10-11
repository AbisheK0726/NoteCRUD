import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import {Home} from './components/Home';
import {Nav} from './components/Nav';
import {ViewNotes} from './components/notes/ViewNotes'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/Notes" component={ViewNotes}/>


      </Switch>
    </BrowserRouter>

  );
}

export default App;
