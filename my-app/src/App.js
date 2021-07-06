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
import Contact from './components/contact';
import FooterPage from './components/footer';
import AddImage from './components/addImage.component';
import DeleteImage from './components/deleteImage.component';

// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <head>
        <title>GolfGreenCompany</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div className="App">
        <Navigation />
        <br /><br /><br />
        <HomeCarousel />
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/homepage" component={Homepage} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/addImage" component={AddImage}/>
            <Route exact path="/deleteImage" component={DeleteImage}/>
          </Switch>
        </header>
        <footer>
          <FooterPage/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
