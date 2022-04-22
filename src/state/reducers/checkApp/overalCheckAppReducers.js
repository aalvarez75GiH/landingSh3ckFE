const overallCheckAppReducer = (
    state={
        level: 'Starting',
        previous_level: '',
        level_used: [],
        button_activated: false,
        desc_tile_active: false
        
    }, action) => {
        switch (action.type) {
            case 'active_button':
                return {...state, button_activated: action.payload }
            case 'level':
                return  {...state, level: action.payload}
        
            case 'previous_level':
                return  {...state, previous_level: action.payload}

            case 'level_used':
                return  {...state, level_used:  [...state.level_used, action.payload]}
            case 'flush_level_used':
                return  { ...state, level_used: []}
            case 'activating_description_tile':
                return  {...state, desc_tile_active: action.payload}

            default:
            return state    
    }
} 

export default overallCheckAppReducer