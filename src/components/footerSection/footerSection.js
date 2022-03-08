import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { infoFooter } from '../../utils/data'
import { useSelector } from 'react-redux'


const FooterSection = () => {
    const language = useSelector((state) => state.sideBarState.language)
    return (
        <div className="footerContainer">
            <div className="footerWrap">
                <div className="footerLinksContainer">
                    <div className="footerLinksWrapper">
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">{language === 'ES' ? infoFooter.footerH1 : infoFooter.footerH1_EN}</h1>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH1P1 : infoFooter.footerH1P1_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH1P2 : infoFooter.footerH1P2_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH1P3 : infoFooter.footerH1P3_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH1P4 : infoFooter.footerH1P4_EN}</p>
                        </div>
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">{language === 'ES' ? infoFooter.footerH2 : infoFooter.footerH2_EN}</h1>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH2P1 : infoFooter.footerH2P1_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH2P2 : infoFooter.footerH2P2_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH2P3 : infoFooter.footerH2P3_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH2P4 : infoFooter.footerH2P4_EN}</p>
                        </div>
                    </div>
                    <div className="footerLinksWrapper">
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">{infoFooter.footerH3}</h1>
                            <p className="footerLink">{infoFooter.footerH3P1}</p>
                            <p className="footerLink">{infoFooter.footerH3P2}</p>
                            <p className="footerLink">{infoFooter.footerH3P3}</p>
                            <p className="footerLink">{infoFooter.footerH3P4}</p>
                        </div>
                        <div className="footerLinkItems">
                            <h1 className="footerLinkTitle">{language === 'ES' ? infoFooter.footerH4 : infoFooter.footerH4_EN}</h1>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH4P1 : infoFooter.footerH4P1_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH4P2 : infoFooter.footerH4P2_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH4P4 : infoFooter.footerH4P3_EN}</p>
                            <p className="footerLink">{language === 'ES' ? infoFooter.footerH4P1 : infoFooter.footerH4P4_EN}</p>
                        </div>

                    </div>
                </div>
                <section className="socialMedia">
                    <div className="socialMediaWrap">
                        <p className="socialLogo">
                        {infoFooter.companyName}
                        </p>
                        <small>{infoFooter.copyRight}{new Date().getFullYear()}</small>
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
