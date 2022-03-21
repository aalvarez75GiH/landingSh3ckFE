const categoryAndSTReducer = (
    state={
        categories: [],
        active_category: {},
        active_service_time: {},
        service_times:[],
        active_category_boolean: false,
        
    }, action) => {
        switch (action.type) {
            case 'category_list':
                return  {...state, categories: action.payload}
            case 'active_category':
                return {...state, active_category: action.payload }
            case 'active_category_boolean':
                return {...state, active_category_boolean: action.payload}
            case 'service_times':
                return {...state, service_times: action.payload }
            case 'active_service_time':
                return {...state, active_service_time: action.payload }
        default:
            return state    
    }
} 

export default categoryAndSTReducer