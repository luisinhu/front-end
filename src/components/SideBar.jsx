// Sidebar.jsx
import React from 'react';
import { Container, Content, SidebarLink } from '../styles/SideBarStyle';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false);
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarLink to="/chave">Chave</SidebarLink>
        <SidebarLink to="/services">Services</SidebarLink>
        <SidebarLink to="/contact">Contact</SidebarLink>
        <SidebarLink to="/sign-up">Sign Up</SidebarLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
