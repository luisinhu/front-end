import {DropdownContainer,Button,Menu,MenuItem,Title} from '../styles/DropDownStyle'
import React from 'react'

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <DropdownContainer>
        <Button type='button' onClick={handleToggleDropdown}>Ver Confrontos</Button>
        <Menu open={isOpen}>
            <Title> Confrontos do Grupo</Title>
            <MenuItem>A vs B</MenuItem>
        </Menu>
    </DropdownContainer>
  )
}

export default DropDown