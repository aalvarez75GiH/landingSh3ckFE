const overallCheckAppReducer = (
    state={
        button_activated: false
        
    }, action) => {
        switch (action.type) {
            case 'active_button':
                return {...state, button_activated: action.payload }

        default:
            return state    
    }
} 

export default overallCheckAppReducer