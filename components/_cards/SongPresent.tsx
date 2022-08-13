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

const SongPresent = ({
    title,
    artist,
    album,
    link,
    start_time,
    end_time,
    user
}: SongPresentI) => {

    return (
        <section>
            <ReactPlayer
                url={link}
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