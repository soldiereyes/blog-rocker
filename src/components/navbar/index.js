import React from "react";
import {Bars, Nav, NavLink, NavLinkRockerBlog, NavMenu} from "./Navbar";

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLinkRockerBlog to="/">
                    Rocker Blog
                </NavLinkRockerBlog>
                <Bars />
                <NavMenu>
                    <NavLink to="/posts" style={{fontWeight:"bold"}}>
                        Posts
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to="/contact" style={{fontWeight:"bold"}}>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}