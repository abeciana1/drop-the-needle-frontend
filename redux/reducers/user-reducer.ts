import {
    USER_SIGNUP,
    USER_LOGIN,
    USER_LOGOUT,
    USER_UPDATE,
    USER_CHECK_LOG_TOKEN
} from '../actions/user-actions'

import { PayloadAction } from '@reduxjs/toolkit'

interface UserInterface {
    [key: string]: any
}

const initialState: UserInterface = {
    currentUser: null
}

const userReducer = (
    state = initialState,
    action: PayloadAction<any>
) => {
    console.log('state', state)
    console.log('action', action)
    switch (action.type) {
        case USER_SIGNUP:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
            break;
    }
}

export default userReducer