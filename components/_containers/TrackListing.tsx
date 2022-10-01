
const TrackListing = ({children}: any) => {

    return (
        <section className="border-solid border-2 border-coolGray rounded-lg">
            <ul>
                {children}
            </ul>
        </section>
    )
}

export default TrackListing