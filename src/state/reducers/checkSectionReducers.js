const checkSectionReducer = (
    state={
        level: 'Starting',
        user: '',
        checker:'',
        creation_time: '',
        due_Date_time: '',
        productToCheck: {},
        status: 'active',
        check_type: '',
        price: '',
        seller: '',
        link: '',
        city: '',
        isOpen: false
    }, action) => {
        switch (action.type) {
        
        case 'level':
            return  {...state, level: action.payload}
        // case 'level':
        //     return  {...state, level: action.payload}
        case 'isOpen':
            return  {...state, isOpen: action.payload}
        default:
            return state    
    }
} 

export default checkSectionReducer