import ReactPlayer from 'react-player/lazy'

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
    handleEnding
}: SongPresentI) => {
    const timeToIntConvert = (time: string) => {
        let splitTime = time.split(":")
        let convertedTime = (parseInt(splitTime[0]) * 60) + parseInt(splitTime[1])
        return convertedTime
    }

    const convertedStartTime = timeToIntConvert(start_time)
    const convertedEndTime = timeToIntConvert(end_time)

    const stateMonitor = () => {
        let duration = convertedEndTime - convertedStartTime
        videoTimerSwitcher(duration)
    }

    const videoTimerSwitcher = (duration: number) => {
        let timeLength = duration * 1000
        console.log({ duration });
        setTimeout(() => {
            handleEnding()
        }, timeLength)
    }

    return (
        <>
            <ReactPlayer
                url={link}
                playing={currentSongIdx > 0}
                onPlay={stateMonitor}
                controls={true}
                className="mx-auto"
            />
            <section className="text-center py-5">
                <h5 className="leading-relaxed">#{ order_number }. {title} - {artist} — {album}</h5>
                <h6 className="leading-relaxed">Provided by { user }</h6>
            </section>
        </>
    )
}

export default SongPresent