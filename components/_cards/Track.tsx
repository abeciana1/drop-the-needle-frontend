import { useState } from 'react'
import { XIcon } from "@heroicons/react/outline"
import { ExpandBtn } from '../core/_buttons'
// import * as icons from "@heroicons/react/outline"
// console.log(icons);


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

    return (
        <li
            className="relative flex flex-col md:flex-row w-full border-coolGray px-2 py-4"
        >
            <div className="font-medium">#{stateOrderNumber}</div>
            <div className="ml-2 font-medium">Title: <span className="font-normal">{title}</span></div>
            <div className="md:absolute md:left-1/3 ml-2 font-medium v">Album: <span className="font-normal">{album}</span></div>
            <ExpandBtn
                addClass="absolute right-5 bottom-1/3 xs:right-10 sm:bottom-2 font-medium"
                onClick={removeTrackHandler}
                icon={XIcon}
                text="Remove"
                backgroundColor="scarlet"
                textColor="altWhite"
            />
        </li>
    )
}

export default Track