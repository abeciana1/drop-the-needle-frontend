import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import moment from 'moment'


const PlaylistPresent = ({ renderedPlaylist }: any) => {

    const {
        title,
        description,
        cover_image,
        date_time,
        hosts,
        participants,
        songs
    } = renderedPlaylist

    const [ currentSong, setCurrentSong ] = useState(0)

    return (
        <>
            <section
                className="text-center"
            >
                <h1 className="leading-relaxed text-5xl">{ title } | { moment(date_time).format("MMM Do YYYY") }</h1>
                <h2 className="leading-relaxed text-4xl">{ description }</h2>
            </section>
            <section>
                
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