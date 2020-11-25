import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage/index'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import './App.css';
import Couple from '../../components/couple';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Getting from '../../components/getting';
import Gift from '../../components/gift';
import Header from '../../components/Header'
import MobileMenu from '../../components/MobileMenu'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <MobileMenu />
        <Switch>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/engagement">
            <Gallery />
          </Route>
          <Route path="/details">
            <Location />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
