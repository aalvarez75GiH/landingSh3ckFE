const productToCheckReducer = (
    state={
        category:'',
        category_id:'',
        subCategory:'',
        service_time: '',
        service_time_id: '',
        service_time_base: null
                
    }, action) => {
        switch (action.type) {
            case 'product_to_check_category':
                return  {...state, category: action.payload}
            case 'product_to_check_subCategory':
                return {...state, subCategory: action.payload }
            case 'product_to_check_id':
                return {...state, category_id: action.payload }
            case 'product_to_check_service_time':
                return  {...state, service_time: action.payload}
            case 'product_to_check_ST_id':
                return  {...state, service_time_id: action.payload}
            case 'product_to_check_ST_base':
                return  {...state, service_time_base: action.payload}


        default:
            return state    
    }
} 

export default productToCheckReducer