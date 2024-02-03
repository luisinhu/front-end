import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #346b31;
  position: fixed;
  height: 100%;
  top: 0px;
  right: ${props => (props.sidebar ? '0' : '-100%')};
  width: 300px;
  animation: showSidebar 0.4s;
  border: 1px solid white;
  > svg {
    background: #346b31;
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  background: #346b31;


`;

export const SidebarLink = styled(Link)`

  color: #fff;
  display: flex;
  font-size: 25px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background: #346b31;

  &.active {
    color: #15cdfc;
  }

  margin-bottom: 20px; /* Adicione o espaçamento desejado aqui */

  &:hover {
    color: #282828;
  }
`;
