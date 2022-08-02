import CustomHead from '../../components/core/CustomHead'

const ListenIndex = (props: any) => {
    const { powerHours } = props

    return (
        <>
            <CustomHead
                title="Drop The Needle | Archives"
                description="Listen to past Power Hours"
            />
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