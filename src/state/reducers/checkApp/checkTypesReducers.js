const checkTypeReducer = (
    state={
        check_types: [],
        check_type_active: false,
    }, action) => {
        switch (action.type) {
            case 'get_check_type':
                return  {...state, check_types: action.payload}
            case 'activating_check_type':
                return {...state, check_type_active: action.payload }
        
        default:
            return state    
    }
} 

export default checkTypeReducer