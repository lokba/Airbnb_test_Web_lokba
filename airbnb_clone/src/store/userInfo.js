import { createAction, handleActions } from "redux-actions";

const GET_USER_ID = 'userInfo/GET_USER_ID';
const GET_USER_INFO = 'userinfo/GET_USER_INFO'

export const getUserId = createAction(GET_USER_ID);
export const getUserInfo = createAction(GET_USER_INFO);


const initialState = {
    userIdx: null,
    userData: null,
}


const userInfo = handleActions(
    {
        [GET_USER_ID]: (state, { payload: userIdx }) => ({
            ...state,
            userIdx,
        }),
        [GET_USER_INFO]: (state, { payload: userData }) => ({
            ...state,
            userData,
        })
    },
    initialState
);

export default userInfo;