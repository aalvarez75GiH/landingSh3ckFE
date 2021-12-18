import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import LoginSideBar from '../components/loginSideBar/loginSideBar'
import MainSideBar from '../components/mainSideBar/mainSideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
// import StyledNavBar from '../components/navBar/styledNavbar'
// import StyledHeroSection from '../components/heroSection/styledHeroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import { infoHero, infoVideo, infoHIW, infoContact  } from '../utils/data'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import ContactSection from '../components/contactSection/contactSection'
// import StyledFooterSection from '../components/footerSection/styledFooterSection'
import FooterSection from '../components/footerSection/footerSection'

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ loginSideBarOpen, setLoginSideBarOpen ] = useState(false)
    // const [ logoutSideBarOpen, setLogoutSideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    const url_userLogin = "http://192.168.1.102:5000/api/users/login"
    const url_userLoginITC = "https://intense-atoll-00786.herokuapp.com/api/users/login"
    useEffect(() => {
        const getToken = async() => {
            const token = localStorage.getItem('SH3CK_TOKEN')
            if (token){
                const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}` 
                    } 
                })
                console.log(response.data)
                setCurrentUser(response.data)
                return setLoggedIn(true)
            }
            setLoggedIn(false)
            setLoggedOut(true)
            
            
        }   
        getToken()

    },[])

    const handlingSubmitLoginUser = async(user) => {
            try {
                const { data } = await axios.post(url_userLoginITC, user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                // ******************************************
                const response = await axios.get('https://intense-atoll-00786.herokuapp.com/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${data.token}` 
                    } 
                })
                setLoginResponse(response)
                console.log(response.data)
                setCurrentUser(response.data)
                setLoggedIn(true)
                setLoggedOut(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
                setLoginResponse(error.response)
            }
        
    }

    const handlingLogin = (user) => {
        console.log('handling Login...')
        handlingSubmitLoginUser(user)
        setLoginSideBarOpen(!loginSideBarOpen)
    }

    const handlingSubmitLogOutUser = () => {
        localStorage.removeItem('SH3CK_TOKEN')
        setMainSideBarOpen(!mainSideBarOpen)
        setLoggedIn(false)
        setLoggedOut(true)
        
    }
 
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
        
    } 
    const toggleLoginSideBar = () => {
        setLoginSideBarOpen(!loginSideBarOpen)
        // console.log(loggedIn)
        // console.log(loggedOut)
        // console.log(loginSideBarOpen)
    }
    // const toggleLogoutSideBar = () => {
    //     setLogoutSideBarOpen(!logoutSideBarOpen)
    // }
    const toggleMainSideBar = () => {
        setMainSideBarOpen(!mainSideBarOpen)
        // console.log(loggedIn)
        // console.log(loggedOut)
        // console.log(mainSideBarOpen)
    } 
    const toggleNotification = () => {
        setLoginResponse(null)
    }


  
    
    return (
        <>
            {/* {!loggedIn && loginSideBarOpen ? */}
            <LoginSideBar
            loginSideBarOpen={ loginSideBarOpen } 
            toggleLoginSideBar={ toggleLoginSideBar }
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingLogin={handlingLogin}
            />
            {/* : null */}
            {/* } */}

            {/* {!loggedOut && logoutSideBarOpen ? */}
            <MainSideBar
            mainSideBarOpen={mainSideBarOpen}
            toggleMainSideBar={toggleMainSideBar}
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            username={currentUser}
           
            />
            {/* : null */}
            {/* } */}
            
            
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleLoginSideBar={toggleLoginSideBar}
                toggleMainSideBar={toggleMainSideBar}
                toggleSideBar={ toggleSideBar }  
                username={currentUser}
                login={ loggedIn }
                // onLogin={ onLogin }
            /> : <NavBar
            toggleLoginSideBar={toggleLoginSideBar}
            toggleMainSideBar={toggleMainSideBar} 
            username={currentUser}
            login={ loggedIn }
            // onLogin={ onLogin }
        />
            }
            <HeroSection {...infoHero} />
            <VideoSection {...infoVideo}/>
            <HiwSection {...infoHIW}/>
            <ContactSection 
            {...infoContact} 
            loggedIn={loggedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            loginResponse={loginResponse}
            toggleNotificationLogin={toggleNotification}
            />
            <FooterSection/>
        </>
    )
}

export default Home
