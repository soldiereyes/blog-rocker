import './App.css';
import React from 'react';
import {Navbar} from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import ErrorPage from "./pages/error/Erro";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/error" errorElement={<ErrorPage/>}/>
            </Routes>
        </Router>
    );
}
export default App;
