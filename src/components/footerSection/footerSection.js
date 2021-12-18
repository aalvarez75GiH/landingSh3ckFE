import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterSection = () => {
    return (
        <div className="footerContainer">
            <div className="footerWrap">
                <div className="footerLinksContainer">
                    <div className="footerLinksWrapper">
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">Algunas cosas sobre nosotros</h1>
                            <p className="footerLink">¿Quienes Somos?</p>
                            <p className="footerLink">¿Que hacemos?</p>
                            <p className="footerLink">¿Porque lo hacemos?</p>
                            <p className="footerLink">Preguntas y respuestas</p>
                        </div>
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">Contáctanos</h1>
                            <p className="footerLink">Contácto</p>
                            <p className="footerLink">Soporte</p>
                            <p className="footerLink">Trabaja con nosotros</p>
                            <p className="footerLink">Video explicativo</p>
                        </div>
                    </div>
                    <div className="footerLinksWrapper">
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">Social Media</h1>
                            <p className="footerLink">Facebook</p>
                            <p className="footerLink">Instagram</p>
                            <p className="footerLink">YouTube</p>
                            <p className="footerLink">Twitter</p>
                        </div>
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">Contáctanos</h1>
                            <p className="footerLink">Contácto</p>
                            <p className="footerLink">Soporte</p>
                            <p className="footerLink">Trabaja con nosotros</p>
                            <p className="footerLink">Video explicativo</p>
                        </div>

                    </div>
                </div>
                <section className="socialMedia">
                    <div className="socialMediaWrap">
                        <p className="socialLogo">
                            Sh3ck
                        </p>
                        <small>Sh3ck @{new Date().getFullYear()}</small>
                        <div className="socialIcons">
                            <a 
                            className="socialIconLink"
                            aria-label="Facebook"
                            target="_blank"
                            href="/"><FaFacebook/></a>
                            
                            <a 
                            className="socialIconLink"
                            aria-label="Instagram"
                            target="_blank"
                            href="/"><FaInstagram/></a>
                            
                            <a 
                            className="socialIconLink"
                            aria-label="YouTube"
                            target="_blank"
                            href="/"><FaYoutube/></a>
                            
                            <a 
                            className="socialIconLink"
                            aria-label="Twitter"
                            target="_blank"
                            href="/"><FaTwitter/></a>
                        
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FooterSection
