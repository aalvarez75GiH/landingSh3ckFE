const cityReducer = (
    state={
        cities: [],
        active_city: {},
        button_activated: false
        
    }, action) => {
        switch (action.type) {
            case 'cities_list':
                return  {...state, cities: action.payload}
            case 'active_city':
                return {...state, active_city: action.payload }
            case 'active_button':
                return {...state, button_activated: action.payload }

        
        
        default:
            return state    
    }
} 

export default cityReducer