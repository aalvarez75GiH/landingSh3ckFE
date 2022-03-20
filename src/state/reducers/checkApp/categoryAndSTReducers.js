const categoryAndSTReducer = (
    state={
        categories: [],
        active_category: {},
        service_times:[]
        
    }, action) => {
        switch (action.type) {
            case 'category_list':
                return  {...state, categories: action.payload}
            case 'active_category':
                return {...state, active_category: action.payload }
            case 'service_times':
                return {...state, service_times: action.payload }
        default:
            return state    
    }
} 

export default categoryAndSTReducer