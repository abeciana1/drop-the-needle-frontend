import { useState } from 'react'
import { XMarkIcon } from "@heroicons/react/outline"

interface TrackI {
    title: string;
    artist: string;
    album: string;
    youtube_link: string;
    start_time: string;
    end_time: string;
    order_number: number;
    user_name: string;
    embed_link: string;
}

const Track = ({
    title,
    artist,
    album,
    youtube_link,
    start_time,
    end_time,
    order_number,
    user_name,
    embed_link
}: TrackI) => {

    const [stateOrderNumber, setOrderNumber] = useState(order_number)
    // todo on dragging - logic - change this number to X

    const removeTrackHandler = () => {
        console.log('remove song')
    }
    // todo hook this function up to remove song
    // todo create action to delete song
    // todo add alert -- are you sure ? -- for double checking on removing song

    // todo create expand button for the remove button 
    return (
        <li
            className="relative flex w-full border-coolGray px-2 py-4"
        >
            <div className="font-medium">#{stateOrderNumber}</div>
            <div className="ml-2 font-medium">Title: <span className="font-normal">{title}</span></div>
            <div className="absolute left-1/3 ml-2 font-medium v">Album: <span className="font-normal">{album}</span></div>
            <button
                className="absolute right-10 font-medium"
                onClick={removeTrackHandler}
            >{XMarkIcon}</button>
        </li>
    )
}

export default Track