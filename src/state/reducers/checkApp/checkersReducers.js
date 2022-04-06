const checkersReducer = (
    state={
        checkers: [],
        active_checker: {},
        checker_gui_active: false,
        checker_stats_active: false,
        active_checker_reviews: []
    }, action) => {
        switch (action.type) {
            case 'checkers_list':
                return  {...state, checkers: action.payload}
            case 'active_checker':
                return {...state, active_checker: action.payload}
            case 'activing_checker_gui':
                return {...state, checker_gui_active: action.payload}
            case 'activing_checker_stats':
                return {...state, checker_stats_active: action.payload}
            case 'set_reviews':
                return {...state, active_checker_reviews: action.payload}
            default:
            return state    
    }
} 

export default checkersReducer