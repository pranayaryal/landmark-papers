import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import Hero from './components/Hero';
import Neurology from './components/Neurology';
import Navbar from './components/Navbar';
import Cardiology from './components/Cardiology';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/neurology" render={() => <Neurology/>}/>
          <Route exact path="/cardiology" render={() => <Cardiology />}/>

        </Switch>
    </div>
  );
}

export default App;
