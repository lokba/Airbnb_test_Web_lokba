import { createAction, handleActions } from "redux-actions";

const GET_USER_ID = 'userInfo/GET_USER_ID';

export const getUserId = createAction(GET_USER_ID);

const initialState = {
    userIdx: null,
}


const userInfo = handleActions(
    {
        [GET_USER_ID]: (state, { payload: userIdx }) => ({
            ...state,
            userIdx,
        })
    },
    initialState
);

export default userInfo;