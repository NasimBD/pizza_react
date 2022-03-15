import React from 'react'
import { Navbar } from '../Navbar/Index';
import { HeroContent, HeroH1, HeroP, HeroWrapper } from './HeroElements';
import { Button } from '../Button';

export const Hero = () => {
  
  return (
    <HeroWrapper>
        <Navbar/>
        <HeroContent>
          <HeroH1>Greatest pizza Ever</HeroH1>
          <HeroP>Choose your favorite ingredients</HeroP>
          <Button to="/order">Place Order</Button>
        </HeroContent>  
    </HeroWrapper>
  )
}
