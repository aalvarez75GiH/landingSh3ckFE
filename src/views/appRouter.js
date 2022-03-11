import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import NextStepSection from '../components/nextStepSection.js/nextStepSection'
import FooterSection from '../components/footerSection/footerSection'
import LoadingSpinner from '../utils/loadingSpinner'
// import CheckSection from '../components/checkSection/checkSection'
import CheckApp from '../components/checkApp/checkApp'
import NotificationBox from '../components/notifications/NotificationBox'
// import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../components/notifications/notificationData'
import { verifyingTokenRequest } from '../requestsToApi'
// ************************* Redux imports
import { actionCreators } from '../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { Home } from 'material-ui-icons'
// ***************************************************


const AppRouter = () => {

 
    //  **************** Redux Actions and State Consumption **********************
    const dispatch = useDispatch()
    const {  
         activatingSpinner,  
        settingCurrentUser, handlingIsLoggedIn,handlingIsLoggedOut, 
        handlingIsSignedInGoogle, gettingGoogleLoginData,  
    } = bindActionCreators(actionCreators, dispatch)
    
    const QASideBarOpen = useSelector((state) => state.sideBarState.QASideBarOpen)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const response = useSelector((state) => state.contactSectionState.response)
    const loginResponse = useSelector((state) => state.homeState.loginResponse)
    
    
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
        console.log('inicializando token...')
        const getToken = async() => {
            const token = localStorage.getItem('SH3CK_TOKEN')
            if (token){
                const response = await verifyingTokenRequest(token)
                console.log(response.data)
                settingCurrentUser(response.data) //action
                return handlingIsLoggedIn(true) //action
            }
            handlingIsLoggedIn(false) //action
            handlingIsLoggedOut(true) //action
        }   
        getToken()
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
              auth = window.gapi.auth2.getAuthInstance()
              const isSignedIn = auth.isSignedIn.get()
              handlingIsSignedInGoogle(isSignedIn) //action(isSignedIn)
              auth.isSignedIn.listen( () => {
                handlingIsSignedInGoogle(auth.isSignedIn.get())
              })   
              })
          })
        }

        const googleTest = async(user, token) => {
        activatingSpinner(true)
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
                activatingSpinner(false) //action
                gettingGoogleLoginData(data)    //action
                settingCurrentUser(data.fullName) //action
                handlingIsLoggedIn(true)  //action
                handlingIsLoggedOut(false) //action
                return res.status
            }
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            activatingSpinner(false) //action
            settingCurrentUser(error.response.data.fullName) //action
            gettingGoogleLoginData(error.response.data) //action
            handlingIsLoggedIn(true)  //action
            handlingIsLoggedOut(false) //action
        }
}
console.log(response)



    return (
              
            <BrowserRouter>
                    <Routes>
                        <Route path="/" exact={true} element={<Home/>}/>
                        {/* <Route path="/QASideBar"  element={<QASideBar/>}/>
                        <Route path="/mainsideBar" element={<MainSideBar  />}/> */}
                    </Routes>
            </BrowserRouter>
    )
}


export default AppRouter