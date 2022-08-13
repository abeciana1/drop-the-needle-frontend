import ReactPlayer from 'react-player/lazy'


interface SongPresentI {
    title: string;
    artist: string;
    album: string;
    link: string;
    start_time: string;
    end_time: string;
    user: string;
}

const timeToSecondConverter = (time: string) => {
    let splitTime = time.split(':')
    if (splitTime.length === 3) {
        (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2])
    } else {
        (+splitTime[0]) * 60 + (+splitTime[1])
    }
}

const SongPresent = ({
    title,
    artist,
    album,
    link,
    start_time,
    end_time,
    user
}: SongPresentI) => {

    let convertedStart = timeToSecondConverter(start_time)
    let convertedEnd = timeToSecondConverter(end_time)

    return (
        <>
            <div className="h-56 md:h-72 lg:h-[32rem]">
                <ReactPlayer
                    url={link + `?start=${convertedStart}&end=${convertedEnd}`}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            </div>
            <section className="text-center py-5">
                <h5 className="leading-relaxed">{title} - {artist} — {album}</h5>
                <h6 className="leading-relaxed">Provided by { user }</h6>
            </section>
        </>
    )
}

export default SongPresent