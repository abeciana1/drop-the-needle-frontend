
const TrackListing = ({children}: any) => {

    return (
        <section className="border-solid border-2 border-coolGray rounded-lg">
            <ul className="divide-coolGray divide-y-2 divide-solid">
                {children}
            </ul>
        </section>
    )
}

export default TrackListing