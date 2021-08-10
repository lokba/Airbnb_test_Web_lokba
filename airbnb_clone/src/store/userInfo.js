import { createAction, handleActions } from "redux-actions";

const GET_USER_ID = 'userInfo/GET_USER_ID';

export const getUserId = createAction(GET_USER_ID);

const initialState = {
    userId: null,
}


const userInfo = handleActions(
    {
        [GET_USER_ID]: (state, { payload: userId }) => ({
            ...state,
            userId,
        })
    },
    initialState
);

export default userInfo;