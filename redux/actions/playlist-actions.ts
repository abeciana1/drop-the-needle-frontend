//! playlist action constants
export const SET_PLAYLIST = "SET_PLAYLIST"
export const SET_SONGS = "SET_SONGS"
export const REVERT_PLAYLIST = "REVERT_PLAYLIST"
export const REVERT_SONGS = "REVERT_SONGS"

const API_URL = 'http://localhost:3001/api/v1/'

export const setPlaylist = (playlistId: number) => {
    return (dispatch: any) => {
        fetch(API_URL + "power_hours/" + playlistId)
            .then(res => res.json())
            .then(data => {
            dispatch({
                type: SET_PLAYLIST,
                payload: data
            })
        })
    }
}

export const revertPlaylist = () => {
    return (dispatch: any) => {
        dispatch({
            type: REVERT_PLAYLIST,
            payload: null
        })
    }
}

export const revertSongs = () => {
    return (dispatch: any) => {
        dispatch({
            type: REVERT_SONGS,
            payload: null
        })
    }
}