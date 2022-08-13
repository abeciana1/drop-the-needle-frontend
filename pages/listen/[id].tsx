
const PlaylistPresent = (renderedPlaylist: any) => {

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

    return (
        <>
            <section>
                <img
                    src={cover_image}
                    alt={title}
                    className="w-screen max-h-72 filter blur-3xl"
                />
            </section>
        </>
    )
}

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

export default PlaylistPresent