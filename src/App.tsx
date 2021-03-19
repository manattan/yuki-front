import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import EachContainer from './components/Each';
import TotalContainer from './components/Total';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/data/each" component={EachContainer} />
            <Route exact path="/data/total" component={TotalContainer} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
