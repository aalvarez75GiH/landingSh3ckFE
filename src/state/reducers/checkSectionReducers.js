const checkSectionReducer = (
    state={
        level: 'Starting',
        previous_level: '',
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
        city_id: '',
        isOpen: false
    }, action) => {
        switch (action.type) {
        
        case 'level':
            return  {...state, level: action.payload}
        
        case 'previous_level':
            return  {...state, previous_level: action.payload}

        case 'isOpen':
            return  {...state, isOpen: action.payload}
        case 'cityToOrder':
            return {...state, city: action.payload}
        case 'cityID': 
            return {...state, city_id: action.payload}
        default:
            return state    
    }
} 

export default checkSectionReducer