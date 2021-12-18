import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavBarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink  
} from './styledNavBarElements'


const StyledNavBar = ({ toggleSideBar, username, onLogin, login }) => {
    
    if (login){
        return(
        <>
        <Nav>
            <NavBarContainer>
                <NavLogo to="/">Sh3ch</NavLogo>
                <MobileIcon
                onClick={ toggleSideBar }
                >
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem
                    onClick={ onLogin }
                    >
                        <NavLinks to="mas">¿Quieres saber más?</NavLinks>
                
                    </NavItem>
                    <NavItem>
                        <NavLinks to="funciona">Como funciona</NavLinks>
                
                    </NavItem>
                    <NavItem>
                        <NavLinks to="serparte">¿Quieres ser parte?</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <NavBtn
                onClick={ onLogin }
                >
                    <NavBtnLink to="/">{ username }</NavBtnLink>
                </NavBtn>
            </NavBarContainer>

        </Nav>
        </>
        )
    }else{
        return (
            <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Sh3ch</NavLogo>
                    <MobileIcon
                    onClick={ toggleSideBar }
                    >
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="mas">¿Quieres saber más?</NavLinks>
                    
                        </NavItem>
                        <NavItem>
                            <NavLinks to="funciona">Como funciona</NavLinks>
                    
                        </NavItem>
                        <NavItem>
                            <NavLinks to="serparte">¿Quieres ser parte?</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn
                    onClick={ onLogin }
                    >
                        <NavBtnLink
                        to="/" 
                        >Inicio de Sesión</NavBtnLink>
                        
                    </NavBtn>
                </NavBarContainer>
    
            </Nav>
            </>
            )
        }
}

export default StyledNavBar