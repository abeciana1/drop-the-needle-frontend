import { useState, useEffect } from 'react'
import CustomHead from '../../../components/core/CustomHead'
import { SingleSelectField } from '../../../components/_forms/inputs'
import { AccordionDataList } from '../../../components/core/_page_elements/Accordion'
import {
    UserCircleIcon,
    EyeIcon,
    AtSymbolIcon,
    ChatIcon,
    DuplicateIcon
} from "@heroicons/react/outline";
import EyeSlashIcon from '../../../public/EyeSlashIcon'
import { TwoColumnGrid } from '../../../components/core/_layouts'
import { ShareBtn } from '../../../components/core/_buttons'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { setPlaylist } from '../../../redux/actions/playlist-actions'
import { copyToClipboard, dateFormatter } from '../../../utils/helper-functions'
import { useRouter } from 'next/router'

// todo - setup func for updating power hour - patch to backend
// todo - add links to the share button bodies

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

const DashboardEditPage = ({ renderedPlaylist, setPlaylist, state }: any) => {
    console.log({state})
    // const router = useRouter()

    // useEffect(() => {
    //     if (window) {
    //         if 
    //     }
    // }, [])

    const {
        id,
        cover_image,
        date_time,
        description,
        title,
        songs,
        participants,
        hosts,
        publish_status
    } = renderedPlaylist

    const formattedDate = dateFormatter(date_time)

    let currentIdx = publish_status ? 0 : 1
    const [selectedPubStatus, setSelectedPubStatus] = useState(powerHourPublishStatuses[currentIdx])

    useEffect(() => {
        setPlaylist(id)
    }, [])
    
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
                    <h3 className="leading-relaxed text-3xl">{formattedDate}</h3>
                </section>
            </section>
            <TwoColumnGrid
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
                <SingleSelectField
                    icon={selectedPubStatus?.bool ? EyeIcon : EyeSlashIcon}
                    labelText="Power hour publish status"
                    dataSource={powerHourPublishStatuses}
                    property="status"
                    selectedValue={selectedPubStatus}
                    setSelectedValue={handlePowerHourPublishStatus}
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
                        <ShareBtn
                            body=""
                            text="Copy present link"
                            textColor="coolGray"
                            backgroundColor="yellow"
                            icon={DuplicateIcon}
                            onClick={() => copyToClipboard(`Join me at ${title} on ${formattedDate}!`)}
                        />
                    </section>
                </section>
            </TwoColumnGrid>
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

const mapStateToProps = (state: any) => ({
    state: state
})

const mapDispatchToProps = {
    setPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditPage)


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