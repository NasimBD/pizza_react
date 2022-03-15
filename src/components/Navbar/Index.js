import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Index';
import { Logo, MenuIcon, Nav, PizzaIcon } from './NavbarElements';

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
      }

  return (
    <Nav>
        <Logo to="/">PIZZA</Logo>
        <MenuIcon onClick={toggle}>
            <span>Menu</span> 
            <PizzaIcon/>
        </MenuIcon>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
    </Nav>
  )
}
