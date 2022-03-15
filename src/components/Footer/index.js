import React from 'react'
import { FooterContainer, FooterLogo, SocialMediaContainer, SocialMediaLink } from './FooterElements';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = ({socialMediaData}) => {
  return (
    <FooterContainer>
        <FooterLogo to="/">
            Pizza
        </FooterLogo>
        <SocialMediaContainer>
        <SocialMediaLink href={socialMediaData.facebook} target="_blank">
            <FaFacebook/>
        </SocialMediaLink>
        <SocialMediaLink href={socialMediaData.instagram} target="_blank">
            <FaInstagram/>
        </SocialMediaLink>
        <SocialMediaLink href={socialMediaData.twitter} target="_blank">
            <FaTwitter/>
        </SocialMediaLink>
        <SocialMediaLink href={socialMediaData.linkedin} target="_blank">
            <FaLinkedin/>
        </SocialMediaLink>
        </SocialMediaContainer>
    </FooterContainer>
  )
}
