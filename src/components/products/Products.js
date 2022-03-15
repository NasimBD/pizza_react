import React from 'react'
import { Product } from '../Product'
import { ProductsContainer, ProductsHeading, ProductsWrapper } from './ProductsElements'

export const Products = ({heading, products}) => {
  return (
    <ProductsContainer>
        <ProductsHeading>
            {heading}
        </ProductsHeading>
        <ProductsWrapper>
            {products.map((product, indx) => 
                <Product
                key={indx}
                product={product}
                />
            )}
        </ProductsWrapper>
    </ProductsContainer>
  )
}
