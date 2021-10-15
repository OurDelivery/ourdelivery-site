import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import {
    FooterContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to='/'>Como funciona</FooterLink>
                            <FooterLink to='/'>Testemunhos</FooterLink>
                            <FooterLink to='/'>Carreira</FooterLink>
                            <FooterLink to='/'>Investimento</FooterLink>
                            <FooterLink to='/'>Termos de Serviço</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Entre em Contato</FooterLinkTitle>
                            <FooterLink to='/'>Contato</FooterLink>
                            <FooterLink to='/'>Suporte</FooterLink>
                            <FooterLink to='/'>Destino</FooterLink>
                            <FooterLink to='/'>Patrocínios</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>

                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Envie um Vídeo</FooterLink>
                            <FooterLink to='/'>Embaixadores</FooterLink>
                            <FooterLink to='/'>Agência</FooterLink>
                            <FooterLink to='/'>Influênciadores</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            OurDelivery
                        </SocialLogo>
                        <WebsiteRights>OurDelivery © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com/' target='_blank' arial-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com/' target='_blank' arial-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/in/' target='_blank' arial-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
