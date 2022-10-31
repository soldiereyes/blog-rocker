import React, { useState, useEffect } from 'react';
// import { Navbar } from './components/navbar';
import Navbar from './components/CaylorNav/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import ErrorPage from "./pages/error/Erro";
import Modal from './components/CaylorModal/Modal';

import { Row, Col } from "reactstrap";
import style from "./App.module.css"
const arr = [
    { title: "kjhg", subtitle: "e4567", content: "r56789" },
    { title: "dfghjk", subtitle: "e4567", content: "r56789" },
    { title: "345678", subtitle: "e4567", content: "r56789" },

]
function App() {


    return (
        <div style={{ height: "100%", position: "relative" }}>
            <Navbar></Navbar>
            <div className={style.AppContent}>
                <Row>


                    {arr.map((item, index) => {
                        if((index +1)%3 ===0){
                            return(<Col className='bg-danger border' lg={12}>
                                {item.title}
                            </Col>)
                        }else{
                            return(
                                <Col className='bg-warning border' lg={6}>{item.title}</Col>
                            )
                        
                        }
                    })}
                </Row>

            </div>
        </div>






        // <Router>
        //     <Navbar/>
        //     <Routes>
        //         <Route path="/" element={<Home/>}/>
        //         <Route path="/posts" element={<Posts/>}/>
        //         <Route path="/error" errorElement={<ErrorPage/>}/>
        //     </Routes>
        // </Router>
    );
}
export default App;
