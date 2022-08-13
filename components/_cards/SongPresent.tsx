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
        <>
            <ReactPlayer
                url={link}
                width="100%"
                controls={true}
            />
        </>
    )
}

export default SongPresent