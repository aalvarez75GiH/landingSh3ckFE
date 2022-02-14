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
import ContactSection from '../components/contactSection/contactSection'
// import ContactSectionTest from '../components/contactSection/contactSectionTest'
import NextStepSection from '../components/nextStepSection.js/nextStepSection'
import FooterSection from '../components/footerSection/footerSection'
import LoadingSpinner from '../utils/loadingSpinner'


// Home version for testing separation of NextStepSection and ContactSection

const Home = () => {

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
    const [ forgotPIN, setForgotPIN ] = useState(false)
    const [ active , setActive ] = useState(null) 
    const [ contactSectionOpen, setContactSectionOpen ] = useState(false)
    const [ loginSideBarLoading, setLoginSideBarLoading ] = useState(false)

    // Google OAuth States *****************************************
    const [ loginData, setLoginData ] = useState(null)
    const [isSignedIn, setIsSignedIn] = useState(null)
    // console.log(isSignedIn)
    // **************************************************************
    
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    // const url_userLogin = "http://192.168.1.102:5000/api/users/login"
    const url_userLoginITC = "https://intense-atoll-00786.herokuapp.com/api/users/login"
    let auth
    useEffect(() => {
        gettingTokenForLocalSignIn()
        insertGapiScript()
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

    // **************************************************************

    const handlingInterestedUser = () => {
        setActive('interested')
        setContactSectionOpen(true)
        setRegView(false)
    }

    const handlingCheckUser = () => {
        setActive('check')
        setContactSectionOpen(true)
        setRegView(false)
        setForgotPIN(false)
    }

    const toggleRegView = () => {
        // setResponse(null)
        setRegView(true)
    }

    const settinRegViewAndForgotPINToFalse = () => {
        setRegView(false)
        setForgotPIN(false)
    }
    const toggleForgotPINState = () => {
        setForgotPIN(!forgotPIN)
    }
    // ***************************************************************


    const handlingSubmitLoginUser = async(user) => {
        setLoginSideBarOpen(false)   
        setLoading(true)
        setTimeout(async() => {
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
                setLoading(false)
                setLoginResponse(response)
                // console.log(response.data)
                setCurrentUser(response.data)
                setLoggedIn(true)
                setLoggedOut(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
                setLoginResponse(error.response)
                setLoading(false)
            }
        },3000)
        
    }

    const handlingSubmitLogOutUser = async() => {
        if (isSignedIn) {
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            setIsSignedIn(false)
            setMainSideBarOpen(!mainSideBarOpen)
            setLoginResponse(null)
        }
        if (loggedIn){
            localStorage.removeItem('SH3CK_TOKEN')
            setMainSideBarOpen(!mainSideBarOpen)
            setLoggedIn(false)
            setLoggedOut(true)
            setLoginResponse(null)
        }
        
        
    }
 
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
        
    } 
    const toggleLoginSideBarToOpen = () => {
        setLoginSideBarOpen(true)
        
    }
    const toggleLoginSideBarToClose = () => {
        setLoginSideBarOpen(false)
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

  
  //  ************* Google OAuth Processes and functions (with googleAuth5) ****************

 
        const insertGapiScript = () => {
            const script = document.createElement('script')
            script.src = "https://apis.google.com/js/platform.js"
            script.onload = () => {
                initializeGooglesignIn()
            }
            document.body.appendChild(script)
          } 
          
          const initializeGooglesignIn = () => {
            window.gapi.load('client:auth2', () => {
              window.gapi.client.init({
                client_id: '915460618193-dcl1a1f3en6f3h22evu9jqk2aqdh1lcj.apps.googleusercontent.com',
                scope:'profile'
              }).then(()=> {
              console.log('gapi initialized...')
            //   const response = window.gapi.auth2.getAuthResponse()
            //   console.log(response)
              auth = window.gapi.auth2.getAuthInstance()
              const isSignedIn = auth.isSignedIn.get()
              {isSignedIn ? setLoggedIn(true) : setLoggedIn(false)}
              setIsSignedIn(isSignedIn)
              console.log(isSignedIn)
              auth.isSignedIn.listen(isSignedIn => {
                  setIsSignedIn(auth.isSignedIn.get())
              })   
              })
          })
          
        }
        const googleTest = async(user, token) => {
            // const test = JSON.parse(user)
            // *****************************************
            try {
                console.log('Sending request to BackEnd api...')
                console.log(token)
                const res = await axios.post('https://intense-atoll-00786.herokuapp.com/api/extUsers/google', {
                    token,
                    headers:{
                        'Content-Type': 'application/json',
                    },
                })
                console.log(res)
                // const res = await axios.post('http://localhost:5000/api/extUsers/google',token)
                const data = await res.data
                if (res.status === 201){
                    console.log(data)
                    setLoginData(data)   
                    setCurrentUser(data.fullName)
                    setLoggedIn(true) 
                    setLoggedOut(false)
                    return res.status
                }
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
                setCurrentUser(error.response.data.fullName)
                setLoginData(error.response.data)
                setLoggedIn(true) 
                setLoggedOut(false)
            }
            // *************************************************
            
            // setLoggedIn(true)
            // setLoggedOut(false)
            
        }
// console.log(googleUser)
// console.log(loginData)
    
    return (
        <>
            <LoadingSpinner 
            loading={loading}
            language={language}
            />

            
            {/* { loading ?
            <LoadingSpinner
            language={language}
            />
            :
            null
            } */}
            
            

            {/* {!loggedIn && loginSideBarOpen ? */}
            <LoginSideBar
            loginSideBarOpen={loginSideBarOpen}
            toggleLoginSideBarToClose={ toggleLoginSideBarToClose }
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            // handlingLogin={handlingLogin}
            loading = {loading}
            language={language}
            loginSideBarLoading={loginSideBarLoading}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
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
                toggleLoginSideBarToOpen={toggleLoginSideBarToOpen}
                toggleMainSideBar={toggleMainSideBar}
                toggleSideBar={ toggleSideBar }  
                login={ loggedIn }
                language={language}
                
            /> : <NavBar
            toggleLoginSideBarToOpen={toggleLoginSideBarToOpen}
            toggleMainSideBar={toggleMainSideBar} 
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
            <ContactSection
                active={active}
                regView={regView}
                forgotPIN={forgotPIN}
                loggedIn={loggedIn}
                isSignedIn={isSignedIn}
                handlingSubmitLoginUser={ handlingSubmitLoginUser}
                loginResponse={loginResponse}
                toggleNotificationLogin={toggleNotification}
                googleTest={googleTest}
                language={language}
                toggleRegView={toggleRegView}
                settinRegViewAndForgotPINToFalse={settinRegViewAndForgotPINToFalse}
                toggleForgotPINState={toggleForgotPINState}
                contactSectionOpen={contactSectionOpen}
                />
                
            <FooterSection language={language}/>
        </>
    )
}

export default Home
