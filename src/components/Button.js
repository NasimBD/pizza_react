import { Link } from "react-router-dom";
import styled from "styled-components";

    export const Button = styled(Link)`
    display: inline-block;
    background-color: ${({orange}) => orange ? 'orange' : ' #e31837'};
    color: white;
    transition: 0.4s ease-in-out;
    cursor: pointer;
    border: none;
    font-size: ${({small}) => small ? '1rem' : '1.3rem'};
    padding: ${({small}) => small ? '1rem 1.5rem' : '1rem 3rem'};
    white-space: nowrap;
    text-decoration: none;


    :hover{
    background-color: ${({orange}) => orange ? '#e31837' : 'white'};
    color: ${({orange}) => orange ? 'white' : 'black'};
    }
    `

    export const ButtonWrapper = styled.div`
    text-align: center;
    `
