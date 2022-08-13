import { useState, useEffect } from 'react'
import moment from 'moment'
// import SongPresent from '../../components/_cards/SongPresent'
import dynamic from 'next/dynamic'

const SongPresent = dynamic(() => import('../../components/_cards/SongPresent'), {
    ssr: false
})

const participantOxfordComma = (participants: any) => {
    if (participants.length === 2) {
        return participants.join(' and ')
    } else if (participants.length > 2) {
        let lastEl = participants.pop()
        return participants.join(', ') + ', and ' + lastEl
    }
}

const PlaylistPresent = ({ renderedPlaylist }: any) => {

    console.log(renderedPlaylist);

    const {
        title,
        description,
        cover_image,
        date_time,
        hosts,
        participants,
        songs
    } = renderedPlaylist

    const [currentSongIdx, setCurrentSongIdx] = useState(0)
    const participantNames = songs.map((song: any) => song.user)
    const participantList = participantOxfordComma(participantNames)
    return (
        <>
            <section
                className="text-center"
            >
                <h1 className="leading-relaxed text-5xl">{ title } | { moment(date_time).format("MMM Do YYYY") }</h1>
                <h2 className="leading-relaxed text-4xl">{description}</h2>
                <h3 className="leading-relaxed text-3xl">Songs provided by</h3>
                <h4 className="leading-relaxed text-2xl">{participantList}</h4>
            </section>
            <section className="mx-auto">
                <SongPresent
                    title={songs[currentSongIdx]?.title}
                    artist={songs[currentSongIdx]?.artist}
                    album={songs[currentSongIdx]?.album}
                    link={songs[currentSongIdx]?.youtube_link}
                    start_time={songs[currentSongIdx]?.start_time}
                    end_time={songs[currentSongIdx]?.end_time}
                    user={songs[currentSongIdx]?.user}
                />
            </section>
        </>
    )
}

export default PlaylistPresent

export const getStaticPaths = async() => {
    let paths: any[] = []

    const res = await fetch("http://localhost:3001/api/v1/power_hours")

    const data = await res.json()

    data.map((playlist: any) => {
        paths.push({
            params: {
                id: playlist.id.toString()
            }
        })
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context: any) => {
    const { params } = context
    const renderedPlaylist = await fetch("http://localhost:3001/api/v1/power_hours/" + params.id).then(res => res.json())
    return {
        props: {
            renderedPlaylist
        }
    }
}