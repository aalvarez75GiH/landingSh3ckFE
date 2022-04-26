const paymentsReducer = (
    state={
        payments: [],
        active_payment_type: {},
        active_payment_details_ui: false,
        active_payment_instructions: false,
        provisional_ref_number: ''
    }, action) => {
        switch (action.type) {
            case 'payments_list':
                return  {...state, payments: action.payload}
            case 'active_payment_type':
                return {...state, active_payment_type: action.payload}
            case 'activating_payment_details_ui':
                return {...state, active_payment_details_ui: action.payload}
            case 'activating_payment_instructions':
                return {...state, active_payment_instructions: action.payload}
            case 'provisional_ref_number':
                return {...state, provisional_ref_number: action.payload}
            default:
            return state    
    }
} 

export default paymentsReducer
