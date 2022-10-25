import React from "react";
import {Bars, Nav, NavLink, NavLinkRockerBlog, NavMenu} from "./Navbar";
import ModalContact from "../modalContact";

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLinkRockerBlog to="/">
                    Rocker Blog
                </NavLinkRockerBlog>
                <Bars />
                <NavMenu>
                    <NavLink to="/posts" >
                        Posts
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to = '/contact'>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}