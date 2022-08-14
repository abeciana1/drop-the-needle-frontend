import { useState } from 'react'
import dynamic from 'next/dynamic'

// todo create select comp for skipping ahead
// todo render order number at top to show which song is being presented
// todo render hosts 

const SongPresent = dynamic(() => import('../../components/_cards/SongPresent'), {
    ssr: false
})

const peopleOxfordComma = (people: any) => {
    if (people.length === 2) {
        return people.join(' and ')
    } else if (people.length > 2) {
        let lastEl = people.pop()
        return people.join(', ') + ', and ' + lastEl
    } else {
        return people[0]
    }
}

const PlaylistPresent = ({ renderedPlaylist }: any) => {

    const {
        title,
        description,
        hosts,
        songs
    } = renderedPlaylist

    const [currentSongIdx, setCurrentSongIdx] = useState(0)
    const participantNames = songs.map((song: any) => song.user)
    const hostNames = hosts.map((user: any) => user.name)
    const participantList = peopleOxfordComma(participantNames)
    const hostList = peopleOxfordComma(hostNames)


    return (
        <>
            <section
                className="text-center"
            >
                <h1 className="leading-relaxed text-5xl">{ hostList } presents: { title }</h1>
                <h2 className="leading-relaxed text-4xl">{description}</h2>
                <h3 className="leading-relaxed text-3xl">Songs provided by</h3>
                <h4 className="leading-relaxed text-2xl">{participantList}</h4>
            </section>
            <section data-pos="current">
                <SongPresent
                    title={songs[currentSongIdx]?.title}
                    artist={songs[currentSongIdx]?.artist}
                    album={songs[currentSongIdx]?.album}
                    link={songs[currentSongIdx]?.embed_link}
                    start_time={songs[currentSongIdx]?.start_time}
                    end_time={songs[currentSongIdx]?.end_time}
                    user={songs[currentSongIdx]?.user}
                    order_number={songs[currentSongIdx]?.order_number}
                    setCurrentSongIdx={setCurrentSongIdx}
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

    data?.map((playlist: any) => {
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