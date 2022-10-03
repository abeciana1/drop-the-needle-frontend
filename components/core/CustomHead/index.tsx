import React, { useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { checkUserLogged } from '../../../redux/actions/user-actions'
import { useRouter } from 'next/router'
import {
    revertPlaylist,
    revertSongs
} from '../../../redux/actions/playlist-actions'

const CustomHead = (props?: any) => {

    const { title, description, checkUserLogged, user, revertSongs, revertPlaylist } = props
    const router = useRouter()

    // * pushing user back to login
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage['dtnLogged'] === 'true') {
                checkUserLogged()
                if ((router.pathname === '/login' || router.pathname === '/signup') && user) {
                    router.push('/dashboard')
                }
            }
        } 
    }, [])

    // * wiping playlist and song state clean if not on a playlist page
    useEffect(() => {
        let playlist = router.asPath.split('/')
        if (playlist[2] !== 'playlist') {
            revertPlaylist()
            revertSongs()
        }
    }, [])

    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description } />
        </Head>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user.currentUser
    }
}

const mapDispatchToProps = {
    checkUserLogged,
    revertPlaylist,
    revertSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHead)