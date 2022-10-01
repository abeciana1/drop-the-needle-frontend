//* {
//*     "id": 1,
//*     "title": "Immigrant Song",
//*     "artist": "Sly and the Family Stone",
//*     "album": "Off the Wall",
//*     "youtube_link": "https://www.youtube.com/watch?v=W8r-tXRLazs",
//*     "start_time": "0:10",
//*     "end_time": "0:15",
//*     "power_hour_id": 10,
//*     "order_number": 1,
//*     "user_name": "Alex",
//*     "embed_link": "https://www.youtube.com/embed/W8r-tXRLazs?start=10&end=15"
//* }

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