const sideBarReducer = (
    state={
        isOpen: false,
        language: 'ES',
        QASideBarOpen: false
    }, action) => {
    
        switch (action.type) {
        case 'isOpen':
            return  {...state, isOpen: action.payload}

        case 'language':
            if (state.language === 'ES'){
                return {...state, language:'EN'}
            }
            if (state.language === 'EN'){
                return {...state, language:'ES'}
            }
            break
        case 'QASideBarOpen': 
            return {...state, QASideBarOpen: action.payload}

        default:
            return state    
    }
} 

export default sideBarReducer

