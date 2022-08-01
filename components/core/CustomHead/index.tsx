import { useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { checkUserLogged } from '../../../redux/actions/user-actions'

const CustomHead = (props: any) => {

    const { title, description, user, checkUserLogged } = props
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage['dtnLogged'] === 'true' && user === null) {
                checkUserLogged()
            } else {
                null
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