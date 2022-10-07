//! playlist action constants
export const REVERT_PLAYLIST = "REVERT_PLAYLIST"
export const REVERT_SONGS = "REVERT_SONGS"
export const SET_SONGS = "SET_SONGS"
export const DELETE_SONG = "DELETE_SONG"

//! playlist CRUD actions for power hour
export const SET_PLAYLIST = "SET_PLAYLIST"
export const CREATE_PLAYLIST = "CREATE_PLAYLIST"
export const DELETE_PLAYLIST = "DELETE_PLAYLIST"
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST"

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

// todo TEST THIS
// export const deleteSong = (songId: number) => {
//     return (dispatch: any) => {
//         const const options = {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             }
//         }
//         fetch(API_URL + "songs/" + songId, options)
//             .then(res => res.json())
//             .then(data => {
//             console.log(data)
//         })
//     }
// }