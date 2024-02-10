// NavBar.jsx
import React, { useState } from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnlink,
  NavLink, 
  NavMenu,
  Img
} from "../styles/NavBarStyle";
import Sidebar from './SideBar';

const NavBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Img src={require("../assets/IF-LOGO.png")} alt="logo-ifro" />
        </NavLink>
        <Bars onClick={showSidebar} />
        {sidebar && <Sidebar active={setSideBar} />}
        <NavMenu>
          <NavLink to="/tabela" activeStyle>
            Tabela
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/chave" activeStyle>
            Chave
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnlink to="/sign-in">Sign In</NavBtnlink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
