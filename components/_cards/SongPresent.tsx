import { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player/lazy'
import YouTube from 'react-youtube';
// const debounce = require('lodash.debounce')

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
    start_time,
    end_time,
    currentSongIdx,
    setCurrentSongIdx,
    handleEnding
}: SongPresentI) => {

    // const [ start, setStart ] = useState(false)
    // const [end, setEnd] = useState(false)

    // useEffect(() => {
        
    // }, [])

    const readyPlayherHandler = (e: any) => {
        console.log({e});
    }

    const options = {
        start: start_time,
        end: end_time,
        playerVars: {
            autoplay: currentSongIdx > 0 ? 1 : 0
        }
    }
    
    return (
        <>
                <YouTube
                    videoId={link}
                    onEnd={handleEnding}
                    opts={options}
                    onReady={readyPlayherHandler}
                />
                {/* <div>
                <iframe
                    width="560"
                    height="315"
                    src={link + "?&origin=http%3A%2F%2Flocalhost%3A3000" + `&autoplay=${currentSongIdx < 1 ? 1 : 0}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write"
                    allowFullScreen
                ></iframe>
                </div> */}
            <section className="text-center py-5">
                <h5 className="leading-relaxed">#{ order_number }. {title} - {artist} — {album}</h5>
                <h6 className="leading-relaxed">Provided by { user }</h6>
            </section>
        </>
    )
}

export default SongPresent