import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { BiUserCheck } from 'react-icons/bi'
import { actionCreators } from '../../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

const NavBarForCS = ({ toggleMainSideBar }) => {
    const dispatch = useDispatch()
    const {  openingMainSideBar } = bindActionCreators(actionCreators, dispatch)
    const mainSideBarOpen = useSelector((state) => state.homeState.mainSideBarOpen)
    console.log(mainSideBarOpen)
    
    return (
        <>
            <nav 
            className="navMobilForCS" >
            <div className="navBarContainerMobil">
                <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                <div className="mobileIconMobilForCS">
                    <BiUserCheck 
                    onClick={() => openingMainSideBar(!mainSideBarOpen)}
                    className="faUserIcon"/> 
                </div>
            </div>
        </nav>
        </>
    )
}
    
export default NavBarForCS