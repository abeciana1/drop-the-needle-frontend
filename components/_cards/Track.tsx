import { useState } from 'react'
import { XIcon } from "@heroicons/react/outline"
import { ExpandBtn } from '../core/_buttons'


interface TrackI {
    id: number;
    title: string;
    artist: string;
    album: string;
    youtube_link: string;
    start_time: string;
    end_time: string;
    user_name: string;
    embed_link: string;
    provided: any;
    index: number;
}

const Track = ({
    id,
    title,
    artist,
    album,
    youtube_link,
    start_time,
    end_time,
    user_name,
    embed_link,
    provided,
    index
}: TrackI) => {

    const removeTrackHandler = () => {
        console.log('remove song')
        if (confirm(`Are you sure you want to delete '${title}' from this power hour?`)) {
            // todo hook this function up to remove song
            // todo create action to delete song
            console.log('you deleted it')
        }
    }

        return (
        <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="relative flex flex-col md:flex-row w-full border-coolGray px-2 py-4"
        >
            <div className="font-medium">Title: <span className="font-normal">{title}</span></div>
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