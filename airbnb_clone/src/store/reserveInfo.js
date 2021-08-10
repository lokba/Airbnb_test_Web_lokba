import { createAction, handleActions } from "redux-actions";

const STORE_CHECKIN_DATE = 'reserveInfo/STORE_CHECKIN_DATE';
const STORE_CHECKOUT_DATE = 'reserveInfo/STORE_CHECKOUT_DATE';
const STORE_CAPACITY = 'reserveInfo/STORE_CAPACITY';


export const storeCheckInDate = createAction(STORE_CHECKIN_DATE);
export const storeCheckOutDate = createAction(STORE_CHECKOUT_DATE);

const initialState = {
    checkin: null,
    checkout: null,
    capacity: null,
}

const reserveInfo = handleActions(
    {
        [STORE_CHECKIN_DATE]: (state, { payload: checkin }) => ({
            ...state,
            checkin,
        }),
        [STORE_CHECKOUT_DATE]: (state, { payload: checkout }) => ({
            ...state,
            checkout,
        }),
        [STORE_CAPACITY]: (state, { payload: capacity }) => ({
            ...state,
            capacity,
        }),

    },
    initialState,
);

export default reserveInfo;