// import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
const debounce = require('lodash.debounce')

interface SongPresentI {
    title: string;
    artist: string;
    album: string;
    link: string;
    start_time: string;
    end_time: string;
    user: string;
    order_number: number;
    currentSongIdx: number;
    setCurrentSongIdx: (value: number) => void;
    handleEnding: () => void;
}

const SongPresent = ({
    title,
    artist,
    album,
    link,
    user,
    order_number,
    currentSongIdx,
    setCurrentSongIdx,
    handleEnding
}: SongPresentI) => {

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/fvXPmtkojnw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

    return (
        <>
            <div className="h-56 md:h-72 lg:h-[32rem]">
                <ReactPlayer
                    muted={false}
                    url={link}
                    loop={false}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={debounce(handleEnding, 2000)}
                    playing={currentSongIdx >= 1}
                />
            </div>
            <section className="text-center py-5">
                <h5 className="leading-relaxed">#{ order_number }. {title} - {artist} — {album}</h5>
                <h6 className="leading-relaxed">Provided by { user }</h6>
            </section>
        </>
    )
}

export default SongPresent