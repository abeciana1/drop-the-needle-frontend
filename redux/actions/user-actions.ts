//! user action constants
export const USER_SIGNUP = "USER_SIGNUP"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const USER_UPDATE = "USER_UPDATE"
<<<<<<< HEAD
export const USER_CHECK_LOG_TOKEN = "USER_CHECK_LOG_TOKEN"

import { API_URL } from '../../utils/api-constants'

export const userSignup = (userData: any) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
    }
    return (dispatch: any) => {
        fetch(API_URL + "signup", options)
        .then(res => res.json())
        .then(data => {
            console.log('data', data);
            localStorage.setItem("dtnLogged", "true")
            dispatch({
                type: USER_SIGNUP,
                payload: data.user
            })
        })
        .catch((err) => {
            console.log("err", err)
        })
    }
}
=======
export const USER_CHECK_LOG_TOKEN = "USER_CHECK_LOG_TOKEN"
>>>>>>> develop
