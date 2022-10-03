//! playlist action constants
export const SET_PLAYLIST = "SET_PLAYLIST"
export const SET_SONGS = "SET_SONGS"

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