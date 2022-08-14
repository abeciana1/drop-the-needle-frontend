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
    setCurrentSongIdx: (value: number) => void;
}

const SongPresent = ({
    title,
    artist,
    album,
    link,
    user,
    order_number,
    setCurrentSongIdx
}: SongPresentI) => {

    return (
        <>
            <div className="h-56 md:h-72 lg:h-[32rem]">
                <ReactPlayer
                    url={link}
                    controls={true}
                    width="100%"
                    height="100%"
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