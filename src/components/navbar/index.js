import React, {useState} from "react";
import {Bars, Button, Nav, NavLink, NavLinkRockerBlog, NavMenu} from "./Navbar";
import ModalContact from "../modalContact";

export const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        < >
            <Nav>
                <NavLinkRockerBlog to="/">
                    Rocker Blog
                </NavLinkRockerBlog>
                <Bars/>
                <NavMenu>
                    <NavLink to="/posts">
                        Posts
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <Button
                        onClick={() => {setOpenModal(true)
                    }}>Contact</Button>
                </NavMenu>
            </Nav>
            {openModal ? < ModalContact  closeModal={true} /> : null}
        </>
    );
}