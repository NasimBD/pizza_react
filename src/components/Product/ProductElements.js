import styled from 'styled-components';

export const ProductContainer = styled.div`
padding: 1rem 2rem;
margin-bottom: 0.6rem;

@media screen and (max-width:576px){
    flex: 0 0 90%;
}

@media screen and (min-width:576px) and (max-width:1000px){
    flex: 0 1 50%;
}

@media screen and (min-width:1000px){
    flex: 0 1 33%;
}
`

export const Image = styled.img`
width: 100%;
height: 13rem;
object-fit: cover;
box-shadow: 8px 8px orange;
margin-bottom: 1rem;
`

export const Info = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
`

export const Title = styled.h2`
margin-bottom: 1rem;
text-align: center;
`

export const Description = styled.p`
text-align: center;
margin-bottom: 1rem;
`

export const Price = styled.span`
margin-bottom: 0.5rem;
font-size: 1.4rem;
`