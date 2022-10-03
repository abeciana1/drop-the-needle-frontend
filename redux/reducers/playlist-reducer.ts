import {
    SET_PLAYLIST,
    SET_SONGS,
    REVERT_PLAYLIST,
    REVERT_SONGS
} from '../actions/playlist-actions'
import { PayloadAction } from '@reduxjs/toolkit'

interface PlaylistInterface {
    [key: string]: any
}

const initialState: PlaylistInterface = {
    playlist: null,
    songs: null
}

const playlistReducer = (
    state = initialState,
    action: PayloadAction<any>
) => {
    switch (action.type) {
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        case SET_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        case REVERT_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            }
        case REVERT_SONGS:
            return {
                ...state,
                songs: action.payload
            }
        default:
            return state
            break;
    }
}

export default playlistReducer