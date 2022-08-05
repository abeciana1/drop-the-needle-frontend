import Link from 'next/link'
import { useState } from 'react'


interface PlaylistCardI {
    id: number;
    title: string;
    description: string;
    timestamp: string;
    coverImage: string;
}

const PlaylistCard = ({
    id,
    title,
    description,
    timestamp,
    coverImage,
}: PlaylistCardI) => {
    const [active, setActive] = useState(false)
    return (
        <div
            className="cursor-pointer"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            <div className="relative z-50">
                <Link
                    href={'/listen/' + id}
                >
                    <img
                        src={coverImage}
                        className="w-72 h-72 mx-auto"
                    />
                </Link>
            </div>
            {active && <img
                src="./vinyl-record.png"
                className="hidden lg:block absolute w-72 h-72 -ml-16 -mt-72 animate-spin-slow"
            />}
            {active &&
                <>
                    <div
                        className="py-4 text-center"
                    >
                        {title}
                    </div>
                </>
            }
        </div>
    )
}

export default PlaylistCard


    // {
    //     "id": 4,
    //     "title": "fake power hour 1",
    //     "description": "Lo-fi distillery authentic truffaut vegan 90's.",
    //     "cover_image": "https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-06/Magical-Mystery-Tour.jpg?itok=8midCi2f",
    //     "date_time": "2022-08-25",
    //     "hosts": [
    //         {
    //             "id": 5,
    //             "name": "Alex",
    //             "email": "alex@test.com"
    //         }
    //     ],
    //     "participants": [
    //         {
    //             "id": 1,
    //             "user_id": 5,
    //             "power_hour_id": 4,
    //             "confirmed_rsvp": true
    //         },
    //         {
    //             "id": 2,
    //             "user_id": 6,
    //             "power_hour_id": 4,
    //             "confirmed_rsvp": false
    //         },
    //         {
    //             "id": 3,
    //             "user_id": 7,
    //             "power_hour_id": 4,
    //             "confirmed_rsvp": false
    //         },
    //         {
    //             "id": 4,
    //             "user_id": 8,
    //             "power_hour_id": 4,
    //             "confirmed_rsvp": false
    //         }
    //     ],