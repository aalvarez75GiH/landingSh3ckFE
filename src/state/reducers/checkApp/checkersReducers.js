const checkersReducer = (
    state={
        checkers: [],
        active_checker: {},
        checker_gui_active: false
        
    }, action) => {
        switch (action.type) {
            case 'checkers_list':
                return  {...state, checkers: action.payload}
            case 'active_checker':
                return {...state, active_checker: action.payload}
            case 'activing_checker_gui':
                return {...state, checker_gui_active: action.payload}
            default:
            return state    
    }
} 

export default checkersReducer