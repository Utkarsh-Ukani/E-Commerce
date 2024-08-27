import { 
    CREATE_PAYMENT_REQUEST, 
    CREATE_PAYMENT_SUCCESS, 
    CREATE_PAYMENT_FAILURE, 
    UPDATE_PAYMENT_REQUEST, 
    UPDATE_PAYMENT_SUCCESS, 
    UPDATE_PAYMENT_FAILURE 
} from "./ActionType";

const initialState = {
    payment: null,
    isLoading: false,
    error: null
};

export const paymentReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_PAYMENT_REQUEST:
        case UPDATE_PAYMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case CREATE_PAYMENT_SUCCESS:
        case UPDATE_PAYMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                payment: action.payload
            };

        case CREATE_PAYMENT_FAILURE:
        case UPDATE_PAYMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
