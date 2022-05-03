
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


// ****** CheckApp Actions creators ***************

// ************** Overall **************************
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

export const levelUsed = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'level_used',
            payload: value
        })
    }
}

export const clearLevelUsed = () => {
    return(dispatch) => {
        dispatch({
            type: 'flush_level_used'
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

export const activatingDescriptionTile = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activating_description_tile',
            payload: status
        })
    }
}

// ************** Check Order **************************
export const settingUserInCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'user_check_order',
            payload: value
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
export const settingBaseAtCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'set_base',
            payload: value
        })
}
}

export const settingCheckerFromCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'checkerFromOrder',
            payload: value
        })
}
}

export const settingCheckTypeAtCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'set_check_type_check_order',
            payload: value
        })
    }
}

export const settingPaymentInCheckOrder = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'payment_check_order',
            payload: value
        })
    }
}

// ************** City **************************
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

// ************** Category and Service Time **************************

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
export const categoryChoseBoolean = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'active_category_boolean',
            payload: status
        })
    }
} 

export const productToCheckServiceTime = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'product_to_check_service_time',
            payload: value
        })
    }
}

export const productToSTID = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'product_to_check_ST_id',
            payload: value
        })
    }
}

export const productToSTBase = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'product_to_check_ST_base',
            payload: value
        })
    }
}

export const serviceTimeChose = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active_service_time',
            payload: value
        })
    }
} 

 
// ************** Checkers and Auth centers  **************************
 
 
export const settingCheckers = (response) => {
    return(dispatch) => {
        dispatch({
            type: 'checkers_list',
            payload: response
        })
    }
}


export const checkerChose = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active_checker',
            payload: value
        })
    }
}

export const activatingCheckerInterface = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activing_checker_gui',
            payload: status
        })
    }
}
export const activatingCheckerStatisticsInterface = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activing_checker_stats',
            payload: status
        })
    }
}

export const settingReviews = (value) => {
    return(dispatch) => {
        dispatch({
            type:'set_reviews',
            payload: value
        })
    }
}

export const settingAuthCenters = (response) => {
    return(dispatch) => {
        dispatch({
            type: 'auth_centers_list',
            payload: response
        })
    }
}

export const settingTypeOfChecker = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'checkers_type',
            payload: value
        })
    }
}



// ************** Check Types  **************************

export const gettingCheckTypesFromApi = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'get_check_type',
            payload: value
        })
    }
}

export const activatingCheckTypeDescription = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activating_check_type_description',
            payload: status
        })
    }
}

export const settingCheckTypeBaseAtCheckTypeState = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'setting_check_type_base_at_state',
            payload: value
        })
    }
}



// ************** Payments   **************************

export const gettingPaymentsTypesFromApi = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'payments_list',
            payload: value
        })
    }
}

export const activatingPaymentDetailsUI = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activating_payment_details_ui',
            payload: status
        })
    }
}

export const activatingPaymentInstructions = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activating_payment_instructions',
            payload: status
        })
    }
}

export const settingActivePaymentType = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'active_payment_type',
            payload: value
        })
    }
}

export const provisionalRefNumber = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'provisional_ref_number',
            payload: value
        })
    }
}

// ************** Admin App   **************************

// ************** Overall **************************
export const activatingAdminApp = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'activating_admin_app',
            payload: status
        })
    }
}

export const activatingAdminAppLoginForm = (status) => {
    return(dispatch) => {
        dispatch({
            type: 'admin_app_login_form_active',
            payload: status
        })
    }
}

export const settingAdminUser = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'setting_admin_user',
            payload: value
        })
    }
}

// ************** roles **************************

export const settingAdminRole = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'setting_admin_role',
            payload: value
        })
    }
}

























