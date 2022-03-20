const productToCheckReducer = (
    state={
        category:'',
        category_id:'',
        subCategory:'',
                
    }, action) => {
        switch (action.type) {
            case 'product_to_check_category':
                return  {...state, category: action.payload}
            case 'product_to_check_subCategory':
                return {...state, subCategory: action.payload }
            case 'product_to_check_id':
                return {...state, category_id: action.payload }

        default:
            return state    
    }
} 

export default productToCheckReducer