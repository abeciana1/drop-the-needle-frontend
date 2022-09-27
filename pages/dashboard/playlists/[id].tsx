import { useState } from 'react'
import moment from 'moment'
import CustomHead from '../../../components/core/CustomHead'
import { SingleSelectField } from '../../../components/_forms/inputs'
import Accordion from '../../../components/core/_page_elements/Accordion'
import { UserCircleIcon } from "@heroicons/react/outline";

// todo - setup func for updating power hour - patch to backend

const powerHourPublishStatuses = [
    {
        status: 'Published',
        bool: true
    },
    {
        status: 'Not Published',
        bool: false
    }
]

const DashboardEditPage = ({ renderedPlaylist }: any) => {

    console.log(renderedPlaylist)
    const {
        cover_image,
        date_time,
        description,
        title,
        songs,
        participants,
        hosts
    } = renderedPlaylist

    const [selectedPubStatus, setSelectedPubStatus] = useState(powerHourPublishStatuses[0])
    
    const handlePowerHourPublishStatus = () => {
        if (selectedPubStatus?.status === 'Published') {
            setSelectedPubStatus(powerHourPublishStatuses[1])
        } else {
            setSelectedPubStatus(powerHourPublishStatuses[0])
        }
    }

    return (
        <>
            <CustomHead
                title={`Dashboard | ${title}`}
                description={description}
            />
            <section
                className="flex flex-col md:flex-row items-center"
            >
                <section>
                    <div>
                        <img
                            src={cover_image}
                            alt={title}
                            className="w-3/4 mx-auto"
                        />
                    </div>
                </section>
                <section>
                    <h1 className="leading-relaxed text-5xl">{title}</h1>
                    <h2 className="leading-relaxed text-4xl">{description}</h2>
                    <h3 className="leading-relaxed text-3xl">{moment(date_time).format("MMMM Do YYYY")}</h3>
                </section>
            </section>
            <section
                className="py-10"
            >
                <SingleSelectField
                    labelText="Power hour publish status"
                    dataSource={powerHourPublishStatuses}
                    property="status"
                    selectedValue={selectedPubStatus}
                    setSelectedValue={handlePowerHourPublishStatus}
                />
                <Accordion
                    icon={UserCircleIcon}
                    heading="test"
                    bodyText="Test body text"
                    size="sm"
                />
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