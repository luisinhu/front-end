import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  width: 170px;
  height: 60px;
  border: 0;
  border-radius: 6px;
  font-family: 'Poppins';
  font-size: 17px;
  background: #3c3c3c; 
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px; 
`;

export const Menu = styled.div`
  width: 100%;
  background-color: #110808;
  padding: 20px;
  box-shadow: 0px 0px 5px #110808;
  border-radius: 5px;
  max-height: ${({ open }) => (open ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  margin: 10px auto;
  word-break: break-all;
  opacity: ${({ open }) => (open ? '1' : '0')};
  display: grid;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;

export const Title = styled.h2`
  color: #f7f7f7;
  margin-bottom: 10px;
`;

export const MenuItem = styled.a`
  display: grid;
  color: #f7f7f7;
  font-size: 20px;
  padding: 8px 0;
`;


