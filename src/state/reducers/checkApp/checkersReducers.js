const checkersReducer = (
    state={
        checkers: [],
        
    }, action) => {
        switch (action.type) {
            case 'checkers_list':
                return  {...state, checkers: action.payload}
        default:
            return state    
    }
} 

export default checkersReducer