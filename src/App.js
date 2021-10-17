import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Particle from "./components/Particle";
import ContactIcons from "./components/ContactIcons";
import UploadImage from "./components/UploadImage";
import  MainGallery from "./components/Galley";


function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Particle />
            <Header />
            <ContactIcons/>
          </Route>
          <Route exact path="/about">
          <Particle />
            <About />
            <ContactIcons/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
          <Particle />
          <Login />
          <ContactIcons/>
        </Route>
        <Route exact path="/gallery">
           < MainGallery/>
          </Route>
          
        </Switch>

        <Route exact path="/uplaod">
            <UploadImage/>
          </Route>
        
      </Router>
     
    </div>
  );
}

export default App;
