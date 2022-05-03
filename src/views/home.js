import React, { useEffect } from 'react'
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
import AdminApp from '../components/adminApp/adminApp'
// import CheckSection from '../components/checkSection/checkSection'
import CheckApp from '../components/checkApp/checkApp'
import NotificationBox from '../components/notifications/NotificationBox'
import NotificationUIForCheckApp from '../components/notifications/notificationUIForCheckApp'
import NotificationUIForAdmin from '../components/notifications/adminAppNotifications/notificationUIForAdmin'
import NotificationUI from '../components/notifications/notificationUI'
// import { responseDataInterested, responseDataRegister, responseDataLogin, responseDataNewPIN } from '../components/notifications/notificationData'
import { verifyingTokenRequest, addingGoogleUserToDB } from '../requestsToApi'
// ************************* Redux imports
import { actionCreators } from '../state'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
// ***************************************************


const Home = () => {

 
    //  **************** Redux Actions and State Consumption **********************
    const dispatch = useDispatch()
    const {  
         activatingSpinner,  
        settingCurrentUser, handlingIsLoggedIn,handlingIsLoggedOut, 
        handlingIsSignedInGoogle, gettingGoogleLoginData,
        settingUserInCheckOrder  
    } = bindActionCreators(actionCreators, dispatch)
    
    const QASideBarOpen = useSelector((state) => state.sideBarState.QASideBarOpen)
    const loggedIn = useSelector((state) => state.homeState.loggedIn)
    const response = useSelector((state) => state.contactSectionState.response)
    const loginResponse = useSelector((state) => state.homeState.loginResponse)
    const adminActive = useSelector((state) => state.adminAppState.admin_app_active)
    
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    // const url_userLogin = "http://192.168.1.102:5000/api/users/login"
    
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
                console.log(response.data.name)
                settingUserInCheckOrder({
                    name: response.data.name,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    picture: response.data.picture

                })
                settingCurrentUser(response.data.name) //action
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
            const res = await addingGoogleUserToDB(token)
            console.log(res)
            const data = res.data
            if (res.status === 201){
                console.log(data)
                activatingSpinner(false) 
                gettingGoogleLoginData(data)    
                settingCurrentUser(data.fullName) 
                handlingIsLoggedIn(true)  
                handlingIsLoggedOut(false) 
                return res.status
            }
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            activatingSpinner(false) 
            settingCurrentUser(error.response.data.fullName) 
            settingUserInCheckOrder({
                name: error.response.data.fullName,
                email: error.response.data.email,
                phoneNumber: error.response.data.phoneNumber,
                // picture: error.response.data.picture

            })
            gettingGoogleLoginData(error.response.data) 
            handlingIsLoggedIn(true)  
            handlingIsLoggedOut(false) 
        }
}
console.log(response)
    return (
    <>
            
    {
        QASideBarOpen && loggedIn ?
        <QASideBar/>
        : 
        loggedIn  ?
        <div className="superContainer">
            <LoadingSpinner/>
             {response || loginResponse  ?
            <NotificationUIForCheckApp />
             :
             null
            }
            <MainSideBar />
            <NavBarForCS /> 
            <CheckApp />
        </div>
    : null
    }
    {
        QASideBarOpen && !loggedIn ?
        <QASideBar />
        : 
        !loggedIn && adminActive ? 
            <>
            <LoadingSpinner/>
            {response   ?
            <NotificationUIForAdmin/>
            :
            null
            }
            <AdminApp/>
            </>
        : null
 
     }
     {
        QASideBarOpen && !loggedIn ?
        <QASideBar />
        : 
        !loggedIn && !adminActive ? 
            <>
            <LoadingSpinner/>
            
            {response || loginResponse  ?
            <NotificationUI />
             :
             null
            }
                
            <SideBar />
            
            { mobil2.screenWidth <= 1098 || mobil ?  
            <NavBarMobil /> 
            : <NavBar />
            }
            <HeroSection />
            <VideoSection />
            <HiwSection />
            <NextStepSection/>
            {
            !loggedIn ?
            <ContactSection
            googleTest={googleTest}
            />
            :
            null
            }
            
            <FooterSection/>    
            </>
        : null
 
     }

            
   
        
    </>
    )
}


export default Home