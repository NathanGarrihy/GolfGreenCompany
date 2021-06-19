// routing
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

// components
import Navigation from './components/navigation';
import Homepage from './components/homepage';
import HomeCarousel from './components/homeCarousel';
import Gallery from './components/gallery';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <br/><br/><br/>
      <HomeCarousel/>
      <header className="App-header">
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/gallery" component={Gallery} />
          </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
