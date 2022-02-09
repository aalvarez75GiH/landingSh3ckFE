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
import FooterSection from '../components/footerSection/footerSection'
import LoadingSpinner from '../utils/loadingSpinner'


// f31c5fee13aef74568ac client id
// 5029d96a85c6c31586054f0c2d8d3010d8fdae69  client secret

const HomeTest = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ loginSideBarOpen, setLoginSideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ language, setLanguage ] = useState('ES')

    // Google OAuth States *****************************************
    const [googleUser, setGoogleUser] = useState({
        fullName: '',
        email: '',
        id: '',
        imageUrl: '',
        token_id: ''
    })
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
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            setIsSignedIn(false)
            setMainSideBarOpen(!mainSideBarOpen)
        }
        if (loggedIn){
            localStorage.removeItem('SH3CK_TOKEN')
            setMainSideBarOpen(!mainSideBarOpen)
            setLoggedIn(false)
            setLoggedOut(true)
        }
        
        
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

  
  //  ************* Google OAuth Processes and functions (with googleAuth3) ****************

 
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
        const googleTest = async(token) => {
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
            isSignedIn={isSignedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            loginResponse={loginResponse}
            toggleNotificationLogin={toggleNotification}
            googleTest={googleTest}
            />
            <FooterSection language={language}/>
        </>
    )
}

export default HomeTest
