
// ****** sideBar Actions creators ***************
export const openingSideBar = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'isOpen',
            payload: status
        })
    }
}

export const changeLanguage = () => {
    return (dispatch) => {
        dispatch({
            type: 'language',
            payload: null
        })
    }
}
export const openingQASideBar = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'QASideBarOpen',
            payload: status
        })
    }
}
// ****************** End ****************************

// ****** heroSections Actions creators ***************
export const openingHeroSection_WWD = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'WWD_Open',
            payload: status
        })
    }
}
export const heroSection_curtain = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'curtain',
            payload: status
        })
    }
}
// ****************** End *****************************

// ****** contactSection Actions creators ***************
export const openingContactSection = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'isContactSectionOpen',
            payload: status
        })
    }
}

export const activatingForm = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active',
            payload: value
        })
    }
}
export const openingRegView = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'regView',
            payload: value
        })
    }
}

export const openingForgotPINView = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'forgotPIN',
            payload: value
        })
    }
}

export const settingResponse = (dataResponse) => {   
    return(dispatch) => {
        dispatch({
            type: 'response',
            payload: dataResponse
        })
    }
}


// ****** Home Actions creators ***************

export const activatingSpinner = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'loading',
            payload: value
        })
    }
}

export const settingCurrentUser = (currentUserName) => {   
    return(dispatch) => {
        dispatch({
            type: 'currentUser',
            payload: currentUserName
        })
    }
}
export const gettingLoginResponseData = (logginUserData) => {   
    return(dispatch) => {
        dispatch({
            type: 'loginResponse',
            payload: logginUserData
        })
    }
}

export const handlingIsLoggedIn  = (status) => {   
    return(dispatch) => {
        dispatch({
            type: 'loggedIn',
            payload: status
        })
    }
}
export const handlingIsLoggedOut  = (status) => {   
    return(dispatch) => {
        dispatch({
            type: 'loggedOut',
            payload: status
        })
    }
}

export const openingMainSideBar  = (status) => {   
    return(dispatch) => {
        dispatch({
            type: 'mainSideBarOpen',
            payload: status
        })
    }
}

export const handlingIsSignedInGoogle  = (status) => {   
    return(dispatch) => {
        dispatch({
            type: 'isSignedIn',
            payload: status
        })
    }
}

export const gettingGoogleLoginData = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'loginData',
            payload: value
        })
    }
} 

// ****** CheckSection Actions creators ***************

export const settingLevel = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'level',
            payload: value
        })
    }
}

export const settingPreviousLevel = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'previous_level',
            payload: value
        })
    }
}

export const settingisOpen = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'isOpen',
            payload: status
        })
    }
}

export const settingCityOfCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'cityToOrder',
            payload: value
        })
}
}

export const settingCityIDAtCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'cityID',
            payload: value
        })
}
}

// ****** CheckApp Actions creators ***************
 
export const gettingCities = (response) => {
    return(dispatch) => {
        dispatch({
            type: 'cities_list',
            payload: response
        })
    }
}

export const cityChose = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active_city',
            payload: value
        })
    }
}

export const activatingCheckAppButton = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'active_button',
            payload: status
        })
    }
}

export const gettingCategories = (response) => {
    return(dispatch) => {
        dispatch({
            type: 'category_list',
            payload: response
        })
    }
}

export const gettingServiceTimes = (response) => {
    return(dispatch) => {
        dispatch({
            type: 'service_times',
            payload: response
        })
    }
}

export const productToCheckCategory = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'product_to_check_category',
            payload: value
        })
    }
}

export const productToCheckID = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'product_to_check_id',
            payload: value
        })
    }
}

export const categoryChose = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active_category',
            payload: value
        })
    }
} 





































