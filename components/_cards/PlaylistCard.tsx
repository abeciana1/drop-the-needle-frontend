import Link from 'next/link'
import { useState } from 'react'


interface PlaylistCardI {
    id: number;
    title: string;
    description: string;
    timestamp: string;
    coverImage: string;
    path: string;
}

const PlaylistCard = ({
    id,
    title,
    description,
    timestamp,
    coverImage,
    path
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
                    href={path + id}
                >
                    <img
                        src={coverImage}
                        className="w-72 h-72 mx-auto aspect-square"
                    />
                </Link>
            </div>
            {active && <img
                src="./vinyl-record.png"
                className="hidden lg:block w-72 h-72 lg:-ml-3 -mt-72 animate-spin-slow"
            />}
            <div
                className="py-4 text-center"
            >
                {title}
            </div>
        </div>
    )
}

export default PlaylistCard