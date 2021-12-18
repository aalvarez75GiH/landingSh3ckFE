import React from 'react'
import {
    SideBarContainer,
    SideBarIcon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute

} from '../sideBar/styledSideBarElements.js'

const StyledSideBar = ({ isOpen, toggleSideBar }) => {
    
    return (
        <SideBarContainer
        isOpen={ isOpen }
        >
            <SideBarIcon
            onClick={ toggleSideBar }
            >
                <CloseIcon/>
            </SideBarIcon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink
                    onClick={ toggleSideBar }
                    >
                        ¿Quieres saber más?
                    </SideBarLink>
                    <SideBarLink
                    onClick={ toggleSideBar }
                    >
                        ¿Como funciona?
                    </SideBarLink>
                    <SideBarLink
                    onClick={ toggleSideBar }
                    >
                        ¿Quiéres ser parte?
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute>
                        Haz Login aquí
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>

        </SideBarContainer>
    )

}

export default StyledSideBar

