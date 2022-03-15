import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {FaPizzaSlice} from 'react-icons/fa';

    export const Nav = styled.nav`
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    height: 5rem;
    `
    
    export const NavLinkCss = css`
    text-decoration: none;
    cursor: pointer;
    `;

    export const Logo = styled(NavLink)`
    ${NavLinkCss};
    color: white;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.3rem;
    `;

    export const MenuIcon = styled.div`
    ${NavLinkCss};
    display:flex;
    align-items: center;
    color: white;
    font-size: 1rem;

    span{
        margin-right: 0.2rem;
    }
    `

    export const PizzaIcon = styled(FaPizzaSlice)`
    color: white;
    font-size: 2.3rem;
    `