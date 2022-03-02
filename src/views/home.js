import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import MainSideBar from '../components/mainSideBar/mainSideBar'
import HeroSection from '../components/heroSection/heroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import NavBarForCS from '../components/navBar/navBarForCS'
import QASideBar from '../components/sideBars/QASideBar'
import ContactSection from '../components/contactSection/contactSection'
// import ContactSectionTest from '../components/contactSection/contactSectionTest'
import NextStepSection from '../components/nextStepSection.js/nextStepSection'
import FooterSection from '../components/footerSection/footerSection'
import LoadingSpinner from '../utils/loadingSpinner'
import CheckSection from '../components/checkSection/checkSection'
import NotificationBox from '../components/notifications/NotificationBox'
import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../components/notifications/notificationData'

// Home version for testing separation of NextStepSection and ContactSection

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ QASideBarOpen, setQASideBarOpen ] = useState(false)
    const [ mainSideBarOpen, setMainSideBarOpen ] = useState(false)
    const [ loginResponse, setLoginResponse ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ language, setLanguage ] = useState('ES')
    const [ regView, setRegView ] = useState(false)
    const [ forgotPIN, setForgotPIN ] = useState(false)
    const [ active , setActive ] = useState(null) 
    const [ contactSectionOpen, setContactSectionOpen ] = useState(false)
    const [response, setResponse ] = useState(null)


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

    const handlingClosingOfContactSection = () => {
        setActive(null)
        setContactSectionOpen(false)
    }

    const toggleRegView = () => {
        setRegView(true)
    }

    const settinRegViewAndForgotPINToFalse = () => {
        setRegView(false)
        setForgotPIN(false)
    }
    const toggleForgotPINState = () => {
        setForgotPIN(!forgotPIN)
    }
    

    const handlingContactSectionResponse = (response) => {
        setResponse(response)
    }
    
    const togglingResponseData = () => {
        if (response && active === 'interested'){
            return responseDataInterested
        }
        if (response && forgotPIN){
            return responseDataNewPIN
        }
        if (response && active === 'check'){
            return responseDataRegister
        }
        if (loginResponse && active === 'check'){
            return responseDataLogin
        } 
    }
    // ***************************************************************


    const handlingSubmitLoginUser = async(user) => {
        setQASideBarOpen(false)   
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
                console.log(response.data)
                setLoginResponse(response)
                setCurrentUser(response.data)
                setLoading(false)
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
            console.log('pasa por isSignedIn')
            const auth = window.gapi.auth2.getAuthInstance()
            await auth.signOut()
            setLoginData(null)
            setIsSignedIn(false)
            setActive(null)
            setMainSideBarOpen(!mainSideBarOpen)
            setLoginResponse(null)
            setContactSectionOpen(false)
        }
        if (loggedIn){
            console.log('pasa por loggedIn')
            localStorage.removeItem('SH3CK_TOKEN')
            setLoginResponse(null)
            setActive(null)
            setMainSideBarOpen(!mainSideBarOpen)
            setLoggedIn(false)
            setLoggedOut(true)
            setContactSectionOpen(false)
        }
        
        
    }
 
    const gettingOutOfCheckApp = async() => {
        localStorage.removeItem('SH3CK_TOKEN')
        setIsSignedIn(false)
        setLoggedIn(false)
        setActive(null)
        setContactSectionOpen(false)
        setRegView(false)
        setLoginData(null)
        setLoginResponse(null)
        setResponse(null)
        
    }
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
        
    } 
    const toggleQASideBarToOpen = () => {
        setQASideBarOpen(true)
        
    }
    const toggleQASideBarToClose = () => {
        console.log('tratando de cerrar')
        setQASideBarOpen(false)
    }

    const toggleMainSideBar = () => {
        setMainSideBarOpen(!mainSideBarOpen)
    } 
    const toggleNotification = () => {
        setResponse(null)
        setLoginResponse(null)
        setActive(null)
        setContactSectionOpen(false)
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

    const workingSpinner = (option) => {
        console.log(option)
        switch (option) {
            case 'activate':
                setLoading(true)
                break
            case 'close':
                setLoading(false)
                break
            default:
                setLoading(false)
                break;
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
              auth = window.gapi.auth2.getAuthInstance()
              const isSignedIn = auth.isSignedIn.get()
              setIsSignedIn(isSignedIn)
              console.log(isSignedIn)
              auth.isSignedIn.listen(isSignedIn => {
                  setIsSignedIn(auth.isSignedIn.get())
              })   
              })
          })
          
        }
        const googleTest = async(user, token) => {
            setLoading(true)
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
                const data = res.data
                if (res.status === 201){
                    console.log(data)
                    setLoading(false)
                    setLoginData(data)   
                    setCurrentUser(data.fullName)
                    setLoggedIn(true) 
                    setLoggedOut(false)
                    return res.status
                }
            } catch (error) {
                console.log(error)
                console.log(error.response.data)
                setLoading(false)
                setCurrentUser(error.response.data.fullName)
                setLoginData(error.response.data)
                setLoggedIn(true) 
                setLoggedOut(false)
            }
    }
            
    return (
    <>
            
    {
        QASideBarOpen && loggedIn ?
        <QASideBar
        QASideBarOpen={QASideBarOpen}
        toggleQASideBarToClose={toggleQASideBarToClose}
        />
        : 
        loggedIn  ?
        <div className="superContainer">
            <MainSideBar
            mainSideBarOpen={mainSideBarOpen}
            toggleMainSideBar={toggleMainSideBar}
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            username={currentUser}
            language={language}
            loginData={loginData} 
            toggleQASideBarToOpen={toggleQASideBarToOpen}        
            />
            <NavBarForCS
            toggleMainSideBar={toggleMainSideBar}
            toggleSideBar={ toggleSideBar }  
            login={ loggedIn }
            language={language}
                
            /> 
            <CheckSection 
            toggleMainSideBar={toggleMainSideBar}
            toggleSideBar={ toggleSideBar }  
            login={ loggedIn }
            gettingOutOfCheckApp={gettingOutOfCheckApp}
            language={language}
            />
        </div>
    : null
    }
            {
                QASideBarOpen && !loggedIn ?
                <QASideBar
                QASideBarOpen={QASideBarOpen}
                toggleQASideBarToClose={toggleQASideBarToClose}
                />
                : 

                
                    !loggedIn ? 
                    <>
                        <LoadingSpinner 
                        loading={loading}
                        language={language}
                        />
                        {response || loginResponse ?
                        <NotificationBox
                        toggleNotification={toggleNotification} 
                        // response={response ? response : null }
                        response={response ? response : loginResponse }
                        responseData={togglingResponseData()} 
                        language={language}
                         />
                         :
                         null
                        }
                            
                        <SideBar 
                        isOpen={ isOpen } 
                        toggleSideBar={ toggleSideBar }
                        language={language}
                        toggleLanguage={toggleLanguage}
                        handlingCheckUser={handlingCheckUser}
                        toggleQASideBarToOpen={toggleQASideBarToOpen}
                        toggleQASideBarToClose={toggleQASideBarToClose}
                        />
                        
                        { mobil2.screenWidth <= 1098 || mobil ?  
                            <NavBarMobil 
                            toggleMainSideBar={toggleMainSideBar}
                            toggleSideBar={ toggleSideBar }  
                            login={ loggedIn }
                            language={language}
                            
                        /> : <NavBar
                        toggleSideBar={toggleSideBar}
                        toggleMainSideBar={toggleMainSideBar} 
                        login={ loggedIn }
                        language={language}
                        />
                        }
                        <HeroSection 
                        handlingCheckUser={handlingCheckUser}
                        language={language} />
                        <VideoSection language={language}/>
                        <HiwSection language={language}/>
                        <NextStepSection
                        handlingInterestedUser={handlingInterestedUser}
                        handlingCheckUser={handlingCheckUser} 
                        language={language}
                        />
                        {
                            !loggedIn ?
                            <ContactSection
                            active={active}
                            regView={regView}
                            forgotPIN={forgotPIN}
                            loggedIn={loggedIn}
                            isSignedIn={isSignedIn}
                            handlingSubmitLoginUser={ handlingSubmitLoginUser}
                            toggleNotificationLogin={toggleNotification}
                            googleTest={googleTest}
                            language={language}
                            toggleRegView={toggleRegView}
                            settinRegViewAndForgotPINToFalse={settinRegViewAndForgotPINToFalse}
                            toggleForgotPINState={toggleForgotPINState}
                            contactSectionOpen={contactSectionOpen}
                            workingSpinner={workingSpinner}
                            handlingClosingOfContactSection={handlingClosingOfContactSection}
                            handlingContactSectionResponse={handlingContactSectionResponse}
                            />
                            :
                            null
                        }
                        <FooterSection language={language}/>
                    </>
                    : null
                        
             }

            
   
        
    </>
    )
}


export default Home