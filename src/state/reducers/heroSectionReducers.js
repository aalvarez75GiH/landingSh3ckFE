const heroSectionReducer = (
    state={
        WWD_Open: false,
        curtain_active: false
    }, action) => {
    
        switch (action.type) {
        case 'WWD_Open':
            return  {...state, WWD_Open: action.payload}
            
        case 'curtain':
            return  {...state, curtain_active: action.payload}
            
        default:
            return state    
    }
} 

export default heroSectionReducer