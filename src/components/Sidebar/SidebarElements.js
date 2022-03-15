import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLinkCss } from '../Navbar/NavbarElements';

    export const SidebarContainer = styled.aside`
    width: 100%;
    max-width: 400px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${({isOpen}) => isOpen ? '0' : '-400px'};
    background-color: hsl(46, 100%, 50%);
    z-index: 10;
    display: grid;
    align-items: center;
    transition: 0.4s ease-in-out;

    `

    export const Icon = styled.div`
    font-size: 3rem;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    `

    export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);

    @media screen and (max-width: 576px){
        grid-template-rows: repeat(3, 60px);
    }
    `

    export const SidebarLink = styled(Link)`
    ${NavLinkCss};
    margin-bottom: 0.2rem;
    height: 3.5rem;
    line-height: 3.5rem;
    color: black;
    display: block;
    text-align: center;
    font-size: 1.6rem;
    transition: 0.4s;

    :hover{
    color: #e31837;    
    }
    `
