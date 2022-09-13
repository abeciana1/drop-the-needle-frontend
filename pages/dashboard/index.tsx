import React, { useEffect } from 'react'
import CustomHead from '../../components/core/CustomHead'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'next/router'
import { ThreeColumnGrid } from '../../components/core/_layouts'
import PlaylistCard from '../../components/_cards/PlaylistCard'

const Dashboard = (props: any) => {
    const { user } = props

    return (
        <>
            <CustomHead
                title="Dashboard | Drop The Needle"
                description=""
            />
            <div className="text-left font-medium">
                <h2>Hi { user?.name }</h2>
            </div>
            <section>
                <h3 className="py-4">Hosted power hours</h3>
                <ThreeColumnGrid addClass="py-10 gap-20">
                    {user?.hosting.slice(0, 3).map((playlist: any) => {
                        return (
                            <PlaylistCard
                                key={playlist['id']}
                                id={playlist['id']}
                                title={playlist['title']}
                                description={playlist['description']}
                                timestamp={playlist['date_time']}
                                coverImage={playlist['cover_image']}
                                path="/dashboard/"
                            />
                        )
                    })}
                </ThreeColumnGrid>
                <h3 className="py-4">Participating power hours</h3>
                <ThreeColumnGrid addClass="py-10 gap-20">
                    {user?.participating.slice(0, 3).map((playlist: any) => {
                        return (
                            <PlaylistCard
                                key={playlist['id']}
                                id={playlist['id']}
                                title={playlist['title']}
                                description={playlist['description']}
                                timestamp={playlist['date_time']}
                                coverImage={playlist['cover_image']}
                                path="/listen/"
                            />
                        )
                    })}
                </ThreeColumnGrid>
            </section>
        </>
    )
}

const mapStateToProps = (state: any) => (
    {
        user: state.user.currentUser
    }
)

export default compose(withRouter, connect(mapStateToProps, null))(Dashboard)