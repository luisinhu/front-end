import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 

export const Nav = styled.nav`
  background: #346b31;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 10;
  border-bottom: 2px solid white;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background: #346b31;

  &.active {
    color: #15cdfc;
  }

`;

export const Img = styled.img`
  width: 210px;
  background: #346b31;
`;

export const Bars = styled(FaBars)`
  display: none;
  background: #346b31;
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
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnlink = styled(Link)`
  border-radius: 4px;
  background: #64a01c;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;

