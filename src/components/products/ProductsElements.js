import styled from 'styled-components';

export const ProductsContainer = styled.div`
background-color: hsl(0, 17%, 7%);
padding: 4rem 1rem;
min-height: 100vh;
color: white;
`

export const ProductsHeading = styled.h2`
text-align: center;
margin-bottom: 3rem;
font-size: clamp(2rem, 2.5vw, 3rem);
`

export const ProductsWrapper = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`