import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
  background: #2d2d2d;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background: #2d2d2d;
  font-size: 1.5rem;
    &:hover {   
        background: #2d2d2d;
        color: #fff;
        transition: all 0.2s ease-in-out;
    }

  &.active {
    color: #ea9d0a;

  }
`
export const NavLinkRockerBlog = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background: #2d2d2d;
    font-size: 2rem;
    font-weight: bold;

  &.active {
    color: #ea9d0a;

  }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
  
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`




