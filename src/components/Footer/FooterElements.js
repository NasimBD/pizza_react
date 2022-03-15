import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
background-color: black;
color: white;
padding: 1rem 2rem;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 576px){
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
`

export const FooterLogo = styled(Link)`
text-decoration: none;
color: white;
font-weight: bold;
font-size: 1.3rem;

@media screen and (max-width: 576px){
margin-bottom: 1.5rem;
}

:hover{
    color: orange;
}
`

export const SocialMediaContainer = styled.div`
`

export const SocialMediaLink = styled.a`
color: white;
font-size: 1.6rem;
transition: 0.4s;
cursor: pointer;
:not(:last-of-type){
    margin-right: 0.5rem;
}

:hover{
    color: #e31837;
}
`


