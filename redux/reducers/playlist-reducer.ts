
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

}

export default playlistReducer