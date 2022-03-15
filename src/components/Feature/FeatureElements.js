import styled from 'styled-components';

export const FeatureContainer = styled.div`
padding: 4rem 2rem;
background: ${({bgImageUrl}) => bgImageUrl ? `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(${bgImageUrl}) center/cover no-repeat` : 'black' };
color: white;
`

export const FeatureHeading = styled.h2`
text-align: center;
font-size: clamp(2rem, 2.9vw, 3rem);
line-height: 1.5;
margin-bottom: 2rem;
`

export const FeatureTitle = styled.h3`
font-size: clamp(1.8rem, 2.2vw, 2.3rem);
line-height: 1.5;
margin-bottom: 2rem;
`

export const FeatureDescription = styled.p`
text-align: center;
max-width: 80%;
font-size: 1.2rem;
line-height: 1.4;
margin-bottom: 1.5rem;
`

export const FeatureInfo = styled.div`
text-align: center;
display: flex;
flex-flow: column nowrap;
align-items: center;
`

export const FeaturePrice = styled.span`
font-size: 1.4rem;
margin-bottom: 1rem;
`