import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BiHelpCircle, BiQuestionMark } from 'react-icons/bi'
import { GrLanguage } from 'react-icons/gr'
// import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

const SideBar = ({ toggleSideBar, isOpen, language }) => {
    return ( 
        // <aside
        // className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`}>
        //     <div 
        //     className="sideBarIcon"
        //     onClick={ toggleSideBar }
        //     >
        //         <FaTimes className="closeIcon"/>
        //     </div>
        //     <div className="sideBarWrapper">
        //         <ul className="sideBarMenu">
        //             <LinkS
        //             onClick={ toggleSideBar }
        //             to="about" 
        //             className="sideBarLink" >
        //                 ¿Quieres saber más?
        //             </LinkS>
        //             <LinkS 
        //             onClick={ toggleSideBar }
        //             to="discover" 
        //             className="sideBarLink" >
        //                 ¿Como funciona?
        //             </LinkS>
        //             <LinkS 
        //             onClick={ toggleSideBar }
        //             to="services" 
        //             className="sideBarLink" >
        //                 ¿Quiéres ser parte?
        //             </LinkS>
        //         </ul>
        //         <div className="sideBtnWrap">
        //             <LinkR
        //             className="sideBarRoute" 
        //             to="/signin">
        //                 Cerrar
        //             </LinkR>
        //         </div>

        //     </div>


        // </aside>
        <aside
        className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`}>
            <div 
            className="sideBarIcon"
            onClick={ toggleSideBar }
            >
                <FaTimes className="closeIcon"/>
            </div>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <div 
                    // onClick={ toggleSideBar }
                    to="discover" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <GrLanguage/>
                        </div>
                        Idioma 
                        <div className="changeLanDiv">
                            (cambiar a español)
                        </div>
                    </div>
                    <div
                    // onClick={ toggleSideBar }
                    to="about" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiQuestionMark/>
                        </div>
                        Questions & Answers
                    </div>
                    
                    <div 
                    // onClick={ toggleSideBar }
                    to="services" 
                    className="sideBarLink" >
                        <div className="mainSideBarUserOptionsIcon">
                            <BiHelpCircle/>
                        </div>
                        Help
                    </div>
                </div>
                <div className="sideBtnWrap">
                    <div
                    className="sideBarRoute" 
                    to="/signin">
                        Cerrar
                    </div>
                </div>

            </div>


        </aside>
    )
}

export default SideBar