const checkAppReducer = (
    state={
        cities: [],
        
    }, action) => {
        switch (action.type) {
            
            case 'cities_list':
            return  {...state, cities: action.payload}
        
        
        default:
            return state    
    }
} 

export default checkAppReducer