import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Track from '../_cards/Track'

interface TrackListingI {
    songs: any;
}

const TrackListing = ({
    songs
}: TrackListingI) => {

    const handleOnDragEnd = (result: any) => {
        console.log({result})
        if (!result.destination) return;
        let items = songs
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // setSongs(items);
        // reorderSongs(playlist.playlist.id, parseInt(result.draggableId), result.destination.index)
    }

    return (
        <section className="border-solid border-2 border-coolGray rounded-lg">
            <DragDropContext
                onDragEnd={(result) => handleOnDragEnd(result)}
            >
                <Droppable droppableId="droppable-list">
                    {(provided) => (
                        <ul
                            className="divide-coolGray divide-y-2 divide-solid"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {songs?.map((song: any, index: number) => {
                                return (
                                <Draggable
                                    key={song?.id}
                                    draggableId={song?.id.toString()}
                                    index={index}
                                >
                                {(provided) => (
                                    <Track
                                        id={song?.id}
                                        key={song?.id}
                                        title={song?.title}
                                        artist={song?.artist}
                                        album={song?.album}
                                        youtube_link={song?.youtube_link}
                                        start_time={song?.start_time}
                                        end_time={song?.end_time}
                                        order_number={song?.order_number}
                                        user_name={song?.user_name}
                                        embed_link={song?.embed_link}
                                        provided={provided}
                                        index={index}
                                    />
                                )}
                                </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
                </DragDropContext>
        </section>
    )
}

export default TrackListing