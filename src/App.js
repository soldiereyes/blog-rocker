import './App.css';
import React from 'react';
import {Navbar} from './components/navbar';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages";
import Posts from "./pages/posts";
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/posts"  component={Posts} />
            <Route path="/contact"  component={Contact} />
        </Routes>
    </Router>
  );
}

export default App;
