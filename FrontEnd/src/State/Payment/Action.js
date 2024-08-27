import { api } from "../../config/apiConfig";
import { 
    CREATE_PAYMENT_REQUEST, 
    CREATE_PAYMENT_SUCCESS, 
    CREATE_PAYMENT_FAILURE, 
    UPDATE_PAYMENT_REQUEST, 
    UPDATE_PAYMENT_SUCCESS, 
    UPDATE_PAYMENT_FAILURE 
} from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });

    try {
        const { data } = await api.post(`/api/payments/${orderId}`, {});

        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
            // Dispatch success action if redirecting successfully
            dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
        } else {
            // Dispatch failure if payment link URL is not present
            dispatch({ type: CREATE_PAYMENT_FAILURE, payload: "Payment link not found" });
        }
    } catch (error) {
        // Handle errors, dispatch failure action
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};

export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("update payment :-", data);

        // Dispatch success action with received data
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        // Handle errors, dispatch failure action
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};
