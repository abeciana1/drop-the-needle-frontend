import { useState } from 'react'
import CustomHead from '../../components/core/CustomHead'
import { TwoColumnGrid } from '../../components/core/_layouts'
import PlaylistCard from '../../components/_cards/PlaylistCard'
import { TextInput } from '../../components/_forms/inputs'

const ListenIndex = (props: any) => {
    const { powerHours } = props
    const [search, setSearch] = useState({ searchText: "" })
    
    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement
        setSearch({
            ...search,
            [name]: value
        })
    }

    const mapSearchToPlaylists = powerHours.filter((playlist: any) => {
        return playlist.title.toLowerCase().includes(search.searchText)
    })

    return (
        <>
            <CustomHead
                title="Drop The Needle | Archives"
                description="Listen to past Power Hours"
            />
            <div className="text-center font-medium">
                <h1>Archives</h1>
                <h2 className="py-4">Listen to past Power Hours</h2>
            </div>
            <div
                className="w-3/4 md:w-1/2 mx-auto py-10"
            >
                <TextInput
                    name="searchText"
                    placeholder="Search"
                    type="text"
                    labelText="Search"
                    value={search.searchText}
                    onChange={searchChangeHandler}
                />
            </div>
            <TwoColumnGrid addClass="lg:mx-20 gap-20 justify-between">
                {mapSearchToPlaylists.map((playlist: any) => {
                    return (
                    <PlaylistCard
                        key={playlist['id']}
                        id={playlist['id']}
                        title={playlist['title']}
                        description={playlist['description']}
                        timestamp={playlist['date_time']}
                        coverImage={playlist['cover_image']}
                        path="/listen/"
                    />)
                })}
            </TwoColumnGrid>
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