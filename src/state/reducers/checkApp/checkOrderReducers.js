const checkOrderReducer = (
    state={
        user:{
            name:'',
            email: '',
            phoneNumber: '',
            picture:''
        },
        checker:{},
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
        

    }, action) => {
        switch (action.type) {
            case 'user_check_order':
                return  {...state, 
                    user:{
                        name: action.payload.name,
                        email: action.payload.email,
                        phoneNumber: action.payload.phoneNumber,
                        picture: action.payload.picture
                    }
                }  

            case 'cityToOrder':
                return {...state, city: action.payload}
            case 'cityID': 
                return {...state, city_id: action.payload}
            case 'checkerFromOrder': 
                return {...state, checker: action.payload}
            case 'set_base':
                return {...state, price: action.payload}
            default:
                return state    
    }
} 

export default checkOrderReducer

