const adminAppReducers = (
    state={
        admin_user:{},
        admin_app_active: false,
        admin_app_login_form_active: false,
        role: null
    }, action) => {

        switch (action.type) {
        case 'activating_admin_app':
            return  {...state, admin_app_active: action.payload}
        case 'admin_app_login_form_active':
            return  {...state, admin_app_login_form_active: action.payload}
        case 'setting_admin_role':
            return  {...state, role: action.payload}
        case 'setting_admin_user':
            return  {...state, admin_user: action.payload}
        default:
            return state    
    }
} 

export default adminAppReducers