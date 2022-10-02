import { useState } from 'react'
import moment from 'moment'
import CustomHead from '../../../components/core/CustomHead'
import { SingleSelectField } from '../../../components/_forms/inputs'
import { AccordionDataList } from '../../../components/core/_page_elements/Accordion'
import {
    UserCircleIcon,
    EyeIcon,
    AtSymbolIcon,
    ChatIcon
} from "@heroicons/react/outline";
import EyeSlashIcon from '../../../public/EyeSlashIcon'
import { ThreeColumnGrid } from '../../../components/core/_layouts'
import { ShareBtn } from '../../../components/core/_buttons'
import dynamic from 'next/dynamic'

// todo - setup func for updating power hour - patch to backend

const TrackListing = dynamic(() => import('../../../components/_containers/TrackListing'), {
    ssr: false
})

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

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        let items = songs
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // setSongs(items);
        // reorderSongs(playlist.playlist.id, parseInt(result.draggableId), result.destination.index)
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
            <ThreeColumnGrid
                addClass="py-10 items-start gap-10"
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
                    heading="Participant List"
                    dataSource={participants}
                    size="md"
                    property="name"
                />
                <section className="mx-auto">
                    <div className="text-4xl pb-5">Promote the power hour</div>
                    <section
                        className="flex gap-2"
                    >
                        <ShareBtn
                            body=""
                            subject={"Join me at " + title}
                            text="Share via email"
                            textColor="altWhite"
                            backgroundColor="royalBlue"
                            icon={AtSymbolIcon}
                        />
                        <ShareBtn
                            body={"Join me at " + title}
                            text="Share via SMS"
                            textColor="altWhite"
                            backgroundColor="bg-green-400"
                            icon={ChatIcon}
                            sms={true}
                        />
                    </section>
                </section>
            </ThreeColumnGrid>
            {songs &&
                <section
                    className="py-10"
            >
                <div>(Click on the track to expand)</div>
                <TrackListing songs={songs} />
                </section>
            }
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
        revalidate: 1
    }
}