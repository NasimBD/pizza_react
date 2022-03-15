import React from 'react'
import {GrFormClose} from 'react-icons/gr';
import {Icon,
     SidebarMenu,
     SidebarLink,
     SidebarContainer } from './SidebarElements';
import { Button, ButtonWrapper } from '../Button';


export const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <GrFormClose/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/pizzas">Pizzas</SidebarLink>
            <SidebarLink to="/featured">Desserts</SidebarLink>
            <SidebarLink to="/desserts">Full Menu</SidebarLink>
        </SidebarMenu>
        <ButtonWrapper>
            <Button to="/order">Order Now</Button>
        </ButtonWrapper>
    </SidebarContainer>
  )
}
