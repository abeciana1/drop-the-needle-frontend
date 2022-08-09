import React, { useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { checkUserLogged } from '../../../redux/actions/user-actions'
import { useRouter } from 'next/router'

const CustomHead = (props?: any) => {

    const { title, description, checkUserLogged, user } = props
    const router = useRouter()
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage['dtnLogged'] === 'true') {
                checkUserLogged()
                if (user === null) {
                    router.push('/login')
                } else if ((router.pathname === '/login' || router.pathname === '/signup') && user) {
                    console.log('hello')
                    router.push('/dashboard')
                }
            } else if (localStorage['dtnLogged'] === undefined) {
                router.push('/login')
            }
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
    checkUserLogged
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHead)