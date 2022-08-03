import CustomHead from '../../components/core/CustomHead'
import { ThreeColumnGrid } from '../../components/core/_layouts'
import PlaylistCard from '../../components/_containers/PlaylistCard'

//* tasks
// todo - add heading
// todo - map content to layout
// todo - add animation to power hours based on mouse enter/leave with vinyl record

const ListenIndex = (props: any) => {
    const { powerHours } = props
    console.log(powerHours);
    return (
        <>
            <CustomHead
                title="Drop The Needle | Archives"
                description="Listen to past Power Hours"
            />
            <div className="text-center pb-20 font-medium">
                <h1>Archives</h1>
                <h2 className="py-4">Listen to past Power Hours</h2>
            </div>
            <ThreeColumnGrid>
                {powerHours.map((playlist: any) => {
                    return (
                    <PlaylistCard
                        title={playlist['title']}
                        description={playlist['description']}
                        timestamp={playlist['date_time']}
                        coverImage={playlist['cover_image']}
                    />)
                })}
            </ThreeColumnGrid>
        </>
    )
}

export const getStaticProps = async () => {
    const powerHourRes = await fetch('http://localhost:3001/api/v1/power_hours')
    const powerHours = await powerHourRes.json()
    
    return {
        props: {
            powerHours
        },
        revalidate: 5
    }
}

export default ListenIndex