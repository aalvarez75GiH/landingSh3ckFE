const paymentsReducer = (
    state={
        payments: [],
        active_payment: {},
        active_payment_details_ui: false,
        
    }, action) => {
        switch (action.type) {
            case 'payments_list':
                return  {...state, payments: action.payload}
            case 'active_payment':
                return {...state, active_payment: action.payload}
            case 'activating_payment_details_ui':
                return {...state, active_payment_details_ui: action.payload}
            
            default:
            return state    
    }
} 

export default paymentsReducer
