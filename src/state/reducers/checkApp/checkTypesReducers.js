const checkTypeReducer = (
    state={
        check_types: [],
        check_type_active_description: false,
        check_type_base: null
    }, action) => {
        switch (action.type) {
            case 'get_check_type':
                return  {...state, check_types: action.payload}
            case 'activating_check_type_description':
                return {...state, check_type_active_description: action.payload }
            case 'setting_check_type_base_at_state':
                return {...state, check_type_base: action.payload }
        
        default:
            return state    
    }
} 

export default checkTypeReducer