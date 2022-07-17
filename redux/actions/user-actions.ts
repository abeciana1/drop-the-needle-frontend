//! user action constants
export const USER_SIGNUP = "USER_SIGNUP"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const USER_UPDATE = "USER_UPDATE"
export const USER_CHECK_LOG_TOKEN = "USER_CHECK_LOG_TOKEN"

const API_URL = 'http://localhost:3001/api/v1'

export const userSignup = (userData: any) => {
    return (dispatch: any) => {
        fetch(API_URL + "signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
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
