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
        <li></li>
    )
}

export default Track