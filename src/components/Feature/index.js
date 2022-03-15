import React from 'react'
import { Button, ButtonWrapper } from '../Button'
import { FeatureContainer, FeatureDescription, FeatureHeading, FeatureInfo, FeaturePrice, FeatureTitle } from './FeatureElements'

export const Feature = ({heading, product}) => {
  return (
    <FeatureContainer bgImageUrl={product.img}>
        <FeatureHeading>{heading}</FeatureHeading>
            <FeatureInfo>
                <FeatureTitle>{product.name}</FeatureTitle>
                <FeatureDescription>{product.desc}</FeatureDescription>
                <FeaturePrice>{product.price}</FeaturePrice>
            </FeatureInfo>
            <ButtonWrapper>
                <Button to="/add-to-cart" small={true}>{product.button}</Button>
            </ButtonWrapper>
    </FeatureContainer>
  )
}
