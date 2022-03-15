import HeroWrapperImg from '../../images/pizza-header.jpg';
import styled from 'styled-components'

export const HeroWrapper = styled.div`
height: 100vh;
background: linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3)) ,url(${HeroWrapperImg}) center/cover no-repeat;
`

export const HeroContent = styled.div`
height: calc(100vh - 3rem);
max-height: 100%;
width: 650px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 650px){
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
font-size: clamp(3rem, 10vw, 4.5rem);
text-transform: uppercase;
color: white;
box-shadow: 4px 8px 0 0 orange;
margin-bottom: 1.5rem;
line-height: 1.3;
`

export const HeroP = styled.p`
color: white;
margin-bottom: 1rem;
text-transform: uppercase;
font-weight: bold;
font-size: 1.5rem;
`