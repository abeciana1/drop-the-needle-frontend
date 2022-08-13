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
        <section>
            <ReactPlayer
                url={link + `?start=${convertedStart}&end=${convertedEnd}`}
                width="100%"
                controls={true}
            />
            <section className="text-center py-5">
                <h5 className="leading-relaxed">{title} - {artist} — {album}</h5>
                <h6 className="leading-relaxed">Provided by { user }</h6>
            </section>
        </section>
    )
}

export default SongPresent