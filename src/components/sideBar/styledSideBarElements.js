import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const SideBarContainer = styled.aside `
position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #0C0920;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    /* top: 0; */
    opacity: 100%;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%') };
`
export const SideBarIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`
export const CloseIcon = styled(FaTimes)`
    color: #ffffff;

`

export const SideBarWrapper = styled.div`
    color: #ffffff;
`
export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}

`
export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #ffffff;
    cursor: pointer;
    
    &:hover {
    color: #FF810A;
    transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div` 
    display: flex;
    justify-content: center;
`
export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background-color: #FF810A;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #FAD570;
    color: #0C0920;
    }
`




