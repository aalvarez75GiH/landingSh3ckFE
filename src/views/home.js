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
import LoadingSpinner from '../utils/loadingSpinner'


// f31c5fee13aef74568ac client id
// 5029d96a85c6c31586054f0c2d8d3010d8fdae69  client secret

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ loginSideBarOpen, setLoginSideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ language, setLanguage ] = useState('EN')

    // Google OAuth States *****************************************
    const [GULoggedIn, setGULoggedIn] = useState(false)
    const [ loginData, setLoginData ] = useState(null)
    const [showloginButton, setShowloginButton] = useState(true)
    const [showlogoutButton, setShowlogoutButton] = useState(false)
    // **************************************************************
    
    
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
            localStorage.setItem('SH3C_TOKEN', data.token)
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
            setLoading(false)
            setLoggedIn(true)
            setLoggedOut(false)
            console.log('Usuaurio encontrado y hace login')    
        } catch (error) {
            console.log(error)
            setLoginResponse(error.response)
        }
    }

    const handlingLogin = (user) => {
        setLoading(true)
        setTimeout(async() => {
            handlingSubmitLoginUser(user)
            setLoading(false)
            setLoginSideBarOpen(!loginSideBarOpen)
        }, 2000);
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
        
    }
    
    const toggleMainSideBar = () => {
        setMainSideBarOpen(!mainSideBarOpen)
    } 
    const toggleNotification = () => {
        setLoginResponse(null)
    }

    const toggleLanguage = () => {
        if (language === 'ES') {
            setLanguage('EN')
            return
        }
        if (language === 'EN'){
            setLanguage('ES')
            return
        } 
    }

  
  //  ************* Google OAuth Process and functions ****************

  const handleGoogleLogin = async(googleData) => {
    console.log('Login Success:', googleData.profileObj)
    setLoginData(googleData.profileObj.name)
    try {
        console.log('handling Login with Google...')
        console.log(googleData.name)
        const res = await fetch('https://intense-atoll-00786.herokuapp.com/api/extUsers/google',{
            method: 'POST',
            body: JSON.stringify({
              token: googleData.tokenId,
            }),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          const data = await res.json()
          console.log(data)
          setLoginData(data)   
          setShowloginButton(false)
          setShowlogoutButton(true)
          setCurrentUser(data.fullName)
          setLoggedIn(true) 
          setLoggedOut(false)
    } catch (error) {
        console.log(error)
        setCurrentUser(googleData.profileObj.name)
        setLoginData(googleData.profileObj)
        setShowloginButton(false)
        setShowlogoutButton(true)
        setLoggedIn(true) 
        setLoggedOut(false)
    }
}

console.log(loginData)
const handleGoogleFailure = (res) => {
    console.log('handling Failure...', res)
}

const handleGoogleLogout = () => {
    alert("You have been logged out successfully");
    console.clear()
    setMainSideBarOpen(!mainSideBarOpen)
    setLoginData(null)
    setLoggedIn(false)
    setLoggedOut(true)
    setShowloginButton(true)
    setShowlogoutButton(false)

}

//  *****************************************************************
//  **********************Google Login New **************************

//   const user = auth.currentUser.get()
        //   console.log(user)
        //   const profile = user.getBasicProfile()
        //   console.log(profile)
        //   const email = profile.getEmail()
        //   console.log(email)
        //   const imageUrl = profile.getImageUrl()
        //   console.log(imageUrl)

const googleTest = (auth) => {
    const user = auth.currentUser.get()
    const profile = user.getBasicProfile()
    const email = profile.getEmail()
    const imageUrl = profile.getImageUrl()
    const token_id = auth.currentUser.get().wc.id_token
    alert('We are in the good way...')
    setLoginData(token_id)
}

console.log(loginData)
    
    return (
        <>
            { loading ?
            <LoadingSpinner/>
            :
            null
            }
            
            {/* {!loggedIn && loginSideBarOpen ? */}
            <LoginSideBar
            loginSideBarOpen={ loginSideBarOpen } 
            toggleLoginSideBar={ toggleLoginSideBar }
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingLogin={handlingLogin}
            loading = {loading}
            language={language}
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
            language={language}
            loginData={loginData}
            handleGoogleLogin={handleGoogleLogin}
            handleGoogleFailure={handleGoogleFailure}
            handleGoogleLogout={handleGoogleLogout}
            showloginButton={showloginButton}
            showlogoutButton={showlogoutButton}
           
            />
            {/* : null */}
            {/* } */}
            
            <SideBar 
            isOpen={ isOpen } 
            toggleSideBar={ toggleSideBar }
            language={language}
            toggleLanguage={toggleLanguage}
            />
            
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleLoginSideBar={toggleLoginSideBar}
                toggleMainSideBar={toggleMainSideBar}
                toggleSideBar={ toggleSideBar }  
                username={currentUser}
                login={ loggedIn }
                language={language}
                // onLogin={ onLogin }
            /> : <NavBar
            toggleLoginSideBar={toggleLoginSideBar}
            toggleMainSideBar={toggleMainSideBar} 
            username={currentUser}
            login={ loggedIn }
            language={language}
            // onLogin={ onLogin }
        />
            }
            <HeroSection language={language} />
            <VideoSection language={language}/>
            <HiwSection language={language}/>
            <ContactSection 
            language={language}
            loggedIn={loggedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            loginResponse={loginResponse}
            toggleNotificationLogin={toggleNotification}
            handleGoogleLogin={handleGoogleLogin}
            handleGoogleFailure={handleGoogleFailure}
            handleGoogleLogout={handleGoogleLogout}
            showloginButton={showloginButton}
            showlogoutButton={showlogoutButton}
            googleTest={googleTest}
            
            />
            <FooterSection language={language}/>
        </>
    )
}

export default Home
