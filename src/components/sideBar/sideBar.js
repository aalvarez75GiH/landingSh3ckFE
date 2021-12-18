import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const SideBar = ({ toggleSideBar, isOpen }) => {
    return (
        <aside
        className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`}>
            <div 
            className="sideBarIcon"
            onClick={ toggleSideBar }
            >
                <FaTimes className="closeIcon"/>
            </div>
            <div className="sideBarWrapper">
                <ul className="sideBarMenu">
                    <LinkS
                    onClick={ toggleSideBar }
                    to="about" 
                    className="sideBarLink" >
                        ¿Quieres saber más?
                    </LinkS>
                    <LinkS 
                    onClick={ toggleSideBar }
                    to="discover" 
                    className="sideBarLink" >
                        ¿Como funciona?
                    </LinkS>
                    <LinkS 
                    onClick={ toggleSideBar }
                    to="services" 
                    className="sideBarLink" >
                        ¿Quiéres ser parte?
                    </LinkS>
                </ul>
                <div className="sideBtnWrap">
                    <LinkR
                    className="sideBarRoute" 
                    to="/signin">
                        Haz Login
                    </LinkR>
                </div>

            </div>


        </aside>
    )
}

export default SideBar