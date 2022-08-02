//! user action constants
export const USER_SIGNUP = "USER_SIGNUP"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"
export const USER_UPDATE = "USER_UPDATE"
export const USER_CHECK_LOG_TOKEN = "USER_CHECK_LOG_TOKEN"

const API_URL = 'http://localhost:3001/api/v1/'

export const userSignup = (userData: any) => {
    return (dispatch: any) => {
        fetch(API_URL + "users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({userData})
    })
        .then(res => res.json())
            .then(data => {
            console.log(data)
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

export const checkUserLogged = () => {
    console.log("checking user token")
    return (dispatch: any) => {
        fetch(API_URL + 'session-renew', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({
                type: USER_CHECK_LOG_TOKEN,
                payload: data.user
            })
        })
    }
}

export const logoutUser = () => {
    localStorage.clear()
    return (dispatch: any) => {
        dispatch({
            type: USER_LOGOUT,
            payload: null
        })
    }
}

export const userLogin = (userData: object) => {
    return (dispatch: any) => {
        fetch(API_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({userData})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("dtnLogged", "true")
            console.log(data)
            dispatch({
                type: USER_LOGIN,
                payload: data.user
            })
        })
    }
}