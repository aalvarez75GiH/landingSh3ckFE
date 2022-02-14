import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import LoginSideBar from '../components/loginSideBar/loginSideBar'
import MainSideBar from '../components/mainSideBar/mainSideBar'
import HeroSection from '../components/heroSection/heroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import ContactSectionTest from '../components/contactSection/contactSectionTest'
import FooterSection from '../components/footerSection/footerSection'
import NextStepSection from '../components/nextStepSection.js/nextStepSection'
import LoadingSpinner from '../utils/loadingSpinner'


// f31c5fee13aef74568ac client id
// 5029d96a85c6c31586054f0c2d8d3010d8fdae69  client secret

const HomeTest2 = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ loginSideBarOpen, setLoginSideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ language, setLanguage ] = useState('ES')
    const [ regView, setRegView ] = useState(false)
    const [ active , setActive ] = useState(null)
    const [ contactSectionOpen, setContactSectionOpen ] = useState(false)
    const [ forgotPIN, setForgotPIN ] = useState(false)


    // Google OAuth States *****************************************
  
    const [ loginData, setLoginData ] = useState(null)
    const [isSignedIn, setIsSignedIn] = useState(null)
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    // const url_userLogin = "http://192.168.1.102:5000/api/users/login"
    const url_userLoginITC = "https://intense-atoll-00786.herokuapp.com/api/users/login"
    useEffect(() => {
        gettingTokenForLocalSignIn()
        window.onload = function () {
            window.google.accounts.id.initialize({
              client_id: "915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com",
              context: 'signin',
              //   ux_mode: "redirect", 
              callback: handleCredentialResponse,
            })
        }
    },[])

    const gettingTokenForLocalSignIn = () => {
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
    }

    

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

    const handlingSubmitLogOutUser = async() => {
        if (isSignedIn) {
            // window.google.accounts.id.disableAutoSelect()
            // const auth = window.gapi.auth2.getAuthInstance()
            // await auth.signOut()
            // setIsSignedIn(false)
            setMainSideBarOpen(!mainSideBarOpen)
        }
        if (loggedIn){
            console.log('pasando por aqui')
            localStorage.removeItem('google_token')
            window.google.accounts.id.disableAutoSelect()
            setMainSideBarOpen(!mainSideBarOpen)
            setLoggedIn(false)
            setLoggedOut(true)
        }
        
        
    }
 
    const toggleRegView = () => {
        // setResponse(null)
        setRegView(true)
    }

    const handlingCheckUser = () => {
        setActive('check')
        setContactSectionOpen(true)
        setRegView(false)
        setForgotPIN(false)
    }

    const handlingInterestedUser = () => {
        setActive('interested')
        setContactSectionOpen(true)
        setRegView(false)
    }
    const settinRegViewAndForgotPINToFalse = () => {
        setRegView(false)
        setForgotPIN(false)
    }

    const toggleForgotPINState = () => {
        setForgotPIN(!forgotPIN)
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

  
//  ************* Google OAuth Processes and functions (with googleAuth4) ****************

        const handleCredentialResponse = async(response) => {
            console.log("Encoded JWT ID token: " + response.select_by)
            response.credential ? setLoggedIn(true) : setLoggedIn(false)
            const token = response.credential
        try {
            console.log('Sending request to BackEnd api...')
            console.log(token)
            localStorage.setItem('google_token', token)
            const res = await axios.post('https://intense-atoll-00786.herokuapp.com/api/extUsers/google', {
                token,
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            console.log(res.data)
            if (res.status === 201){
                console.log(res.data)
                setLoginData(res.data)   
                setCurrentUser(res.data.fullName)
                setLoggedIn(true) 
                setLoggedOut(false)
                return res.status
            }
            // const res = await axios.post('http://localhost:5000/api/extUsers/google',token)
            
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            setCurrentUser(error.response.data.fullName)
            setLoginData(error.response.data)
            setLoggedIn(true) 
            setLoggedOut(false)
        }
        }


    
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
                
            /> : <NavBar
            toggleLoginSideBar={toggleLoginSideBar}
            toggleMainSideBar={toggleMainSideBar} 
            username={currentUser}
            login={ loggedIn }
            language={language}
            
        />
            }
            <HeroSection language={language} />
            <VideoSection language={language}/>
            <HiwSection language={language}/>
            <NextStepSection
            handlingInterestedUser={handlingInterestedUser}
            handlingCheckUser={handlingCheckUser} 
            language={language}
            />
            <ContactSectionTest 
            language={language}
            loggedIn={loggedIn}
            isSignedIn={isSignedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            loginResponse={loginResponse}
            toggleNotificationLogin={toggleNotification}
            active={active}
            regView={regView}
            contactSectionOpen={contactSectionOpen}  
            forgotPIN={forgotPIN}
            toggleRegView={toggleRegView}
            settinRegViewAndForgotPINToFalse={settinRegViewAndForgotPINToFalse}
            toggleForgotPINState={toggleForgotPINState}
            
            />
            <FooterSection language={language}/>
        </>
    )
}

export default HomeTest2
