const cityReducer = (
    state={
        cities: [],
        active_city: {},
    }, action) => {
        switch (action.type) {
            case 'cities_list':
                return  {...state, cities: action.payload}
            case 'active_city':
                return {...state, active_city: action.payload }
        
        default:
            return state    
    }
} 

export default cityReducer