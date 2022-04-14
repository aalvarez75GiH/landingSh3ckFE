const checkTypeReducer = (
    state={
        check_types: [],
        check_type_active_description: false,
    }, action) => {
        switch (action.type) {
            case 'get_check_type':
                return  {...state, check_types: action.payload}
            case 'activating_check_type_description':
                return {...state, check_type_active_description: action.payload }
        
        default:
            return state    
    }
} 

export default checkTypeReducer