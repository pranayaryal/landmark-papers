import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Movement from './components/Movement';
import Neuromuscular from './components/Neuromuscular';
import Navbar from './components/Navbar';
import Cardiology from './components/Cardiology';
import Home from './components/Home';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="hidden">Home Icon</div>

      <div className="flex px-6 pt-5 lg:px-40 lg:pt-16">
        <Menu />
        {/* <Content /> */}
        <div className="ml-4 lg:w-4/5 lg:ml-20">
          <Switch>
            <Route exact path="/movement" render={() => <Movement />} />
            <Route exact path="/neuromuscular" render={() => <Neuromuscular />} />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/cardiology" render={() => <Cardiology />} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

