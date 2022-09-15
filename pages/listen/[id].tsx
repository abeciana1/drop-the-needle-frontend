import { useState } from 'react'
import dynamic from 'next/dynamic'
import { SongSelectField } from '../../components/_forms/inputs'

// todo create select comp for skipping ahead

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
    const [selectSong, setSelectSong] = useState(songs[currentSongIdx])

    console.log(currentSongIdx);

    const handleEnding = () => {
        setCurrentSongIdx((currentSongIdx + 1))
    }

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
                {songs.slice(currentSongIdx, (currentSongIdx + 1)).map((selectedSong: any) => {
                    return (<SongPresent
                        key={selectSong?.id}
                        title={selectedSong?.title}
                        artist={selectedSong?.artist}
                        album={selectedSong?.album}
                        link={selectedSong?.embed_link}
                        // link={fakeSongs[currentSongIdx]}
                        start_time={selectedSong?.start_time}
                        end_time={selectedSong?.end_time}
                        user={selectedSong?.user}
                        order_number={selectedSong?.order_number}
                        currentSongIdx={currentSongIdx}
                        setCurrentSongIdx={setCurrentSongIdx}
                        handleEnding={handleEnding}
                    />)
                })}
                {/* <SongPresent
                    title={songs[currentSongIdx]?.title}
                    artist={songs[currentSongIdx]?.artist}
                    album={songs[currentSongIdx]?.album}
                    // link={songs[currentSongIdx]?.embed_link}
                    link={fakeSongs[currentSongIdx]}
                    start_time={songs[currentSongIdx]?.start_time}
                    end_time={songs[currentSongIdx]?.end_time}
                    user={songs[currentSongIdx]?.user}
                    order_number={songs[currentSongIdx]?.order_number}
                    currentSongIdx={currentSongIdx}
                    setCurrentSongIdx={setCurrentSongIdx}
                    handleEnding={handleEnding}
                /> */}
            </section>
            <SongSelectField
                labelText="Select a song"
                dataSource={songs}
                property="title"
                selectedValue={selectSong}
                setSelectedValue={setSelectSong}
            />
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