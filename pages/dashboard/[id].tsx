import moment from 'moment'
import CustomHead from '../../components/core/CustomHead'

const DashboardEditPage = ({ renderedPlaylist }: any) => {

    console.log(renderedPlaylist)
    const {
        cover_image,
        date_time,
        description,
        title,
        song,
        participants,
        hosts
    } = renderedPlaylist

    return (
        <>
            <CustomHead
                title={`Dashboard | ${title}`}
                description={description}
            />
            <section
                className="flex items-center"
            >
                <div>
                    <img
                        src={cover_image}
                        alt={title}
                        className="w-3/4"
                    />
                </div>
                <section>
                    <h1 className="leading-relaxed text-5xl">{title}</h1>
                    <h2 className="leading-relaxed text-4xl">{description}</h2>
                    <h3 className="leading-relaxed text-3xl">{moment(date_time).format("MMMM Do YYYY")}</h3>
                </section>
            </section>
        </>
    )
}

export default DashboardEditPage


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
        },
        revalidate: 10
    }
}