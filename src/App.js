import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () =>{
return (
  <>
  <Navbar />
 <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/contact" component={Contact} />
   <Route exact path="/about" component={About} />
   <Route exact path="/work" component={Work} />
   <Redirect to="/" />
 </Switch>
 <Footer />
  </>
);
};

export default App;
