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
      <div className="hidden lg:text-gray-900 lg:block lg:relative lg:px-8 lg:mt-8 xl:px-8">
        <a href="/" className="lg:top-6 lg:left-8">
          <img className="lg:w-12 lg:w-12 xl:w-16 xl:w-16" src={require('./img/writing.svg')} alt="suburbs" />
        </a>
      </div>

      <div className="lg:flex px-6 lg:px-20 lg:mt-4">
        <div className="lg:w-2/5">
          <Menu />
        </div>
        {/* <Content /> */}
        <div className="ml-8 md:px-32 lg:px-0 lg:w-4/5 lg:ml-10 md:w-auto">
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

