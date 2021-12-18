import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIcons,
    SocialIconLink

} from './footerElements'

const StyledFooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Algunas cosas sobre nosotros</FooterLinkTitle>
                                <FooterLink>¿Quienes Somos?</FooterLink>
                                <FooterLink>¿Que hacemos?</FooterLink>
                                <FooterLink>¿Porque lo hacemos?</FooterLink>
                                <FooterLink>Preguntas y respuestas</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contáctanos</FooterLinkTitle>
                                <FooterLink>Contácto</FooterLink>
                                <FooterLink>Soporte</FooterLink>
                                <FooterLink>Preguntas y respuestas</FooterLink>
                                <FooterLink>Video explicativo</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>Social media</FooterLinkTitle>
                                <FooterLink>Instagram</FooterLink>
                                <FooterLink>Facebook</FooterLink>
                                <FooterLink>Youtube</FooterLink>
                                <FooterLink>Twitter</FooterLink>
                        </FooterLinkItems>                        
                        <FooterLinkItems>
                            <FooterLinkTitle>Contáctanos</FooterLinkTitle>
                                <FooterLink>Contácto</FooterLink>
                                <FooterLink>Soporte</FooterLink>
                                <FooterLink>Preguntas y respuestas</FooterLink>
                                <FooterLink>Video explicativo</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Sh3ck
                        </SocialLogo>
                        <WebSiteRights>Sh3ck @{new Date().getFullYear()} - Derechos Reservados </WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href="/"
                            target="_blank"
                            aria-label="Facebook"
                            >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/"
                            target="_blank"
                            aria-label="Instagram"
                            >
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/"
                            target="_blank"
                            aria-label="Youtube"
                            >
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink 
                            href="/"
                            target="_blank"
                            aria-label="Twitter"
                            >
                                <FaTwitter/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}


export default StyledFooterSection
        // <div className="footerSectionContainer">
        //     <div className="footerWrapper">
        //         <div className="footerSection2" >

        //         </div>
        //     </div>
            
        // </div>