

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

    return (
        <li
            className="relative flex w-full border-coolGray px-2 py-4"
        >
            <div className="font-medium">#{order_number}</div>
            <div className="ml-2 font-medium">Title: <span className="font-normal">{title}</span></div>
            <div className="absolute left-1/3 ml-2 font-medium v">Album: <span className="font-normal">{album}</span></div>
            <button className="absolute right-10 font-medium">Remove</button>
        </li>
    )
}

export default Track