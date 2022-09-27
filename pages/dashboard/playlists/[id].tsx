import { useState } from 'react'
import moment from 'moment'
import CustomHead from '../../../components/core/CustomHead'
import { SingleSelectField } from '../../../components/_forms/inputs'
import { AccordionDataList } from '../../../components/core/_page_elements/Accordion'
import { UserCircleIcon, EyeIcon } from "@heroicons/react/outline";
import EyeSlashIcon from '../../../public/EyeSlashIcon'

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
        hosts,
        publish_status
    } = renderedPlaylist

    let currentIdx = publish_status ? 0 : 1
    const [selectedPubStatus, setSelectedPubStatus] = useState(powerHourPublishStatuses[currentIdx])
    
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
                    icon={selectedPubStatus?.bool ? EyeIcon : EyeSlashIcon}
                    labelText="Power hour publish status"
                    dataSource={powerHourPublishStatuses}
                    property="status"
                    selectedValue={selectedPubStatus}
                    setSelectedValue={handlePowerHourPublishStatus}
                />
                <AccordionDataList
                    icon={UserCircleIcon}
                    heading="test"
                    dataSource={participants}
                    size="md"
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