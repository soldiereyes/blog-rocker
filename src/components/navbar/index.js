import React from "react";
import {Bars, Nav, NavLink, NavMenu} from "./Navbar";

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    Rocker Blog
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/posts" activeStyle>
                        Posts
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}