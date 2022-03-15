import React from 'react'
import { Button, ButtonWrapper } from '../Button'
import { Description, Image, Info, Price, ProductContainer, Title } from './ProductElements'

export const Product = ({product}) => {
  return (
    <ProductContainer>
        <Image src={product.img} alt={product.alt}/>
        <Info>
              <Title>{product.name}</Title>
              <Description>{product.desc}</Description>
              <Price>{product.price}</Price>
          </Info>
          <ButtonWrapper>
              <Button to="/add-to-cart" small={true}>{product.button}</Button>
          </ButtonWrapper>
    </ProductContainer>
  )
}
