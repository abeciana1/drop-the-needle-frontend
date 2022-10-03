import {
    SET_PLAYLIST,
    SET_SONGS
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
    }
}

export default playlistReducer