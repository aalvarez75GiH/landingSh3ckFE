const checkTypeReducer = (
    state={
        check_types: [],
        active_check_type: {},
    }, action) => {
        switch (action.type) {
            case 'get_check_type':
                return  {...state, check_types: action.payload}
            case 'active_check_type':
                return {...state, active_check_type: action.payload }
        
        default:
            return state    
    }
} 

export default checkTypeReducer