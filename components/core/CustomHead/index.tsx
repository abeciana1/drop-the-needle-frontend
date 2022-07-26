import Head from 'next/head'
import { connect } from 'react-redux'
import { checkUserLogged } from '../../../redux/actions/user-actions'

const CustomHead = (props: any) => {

    const { title, description, user, checkUserLogged } = props
    
    if (typeof window !== 'undefined') {
        if (localStorage['dtnLogged'] === 'true' && user.currentUser === null) {
            checkUserLogged()
        } else {
            null
        }
    }

    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description } />
        </Head>
    )
}

const mapStateToProps = (state: object) => {
    return state
}

const mapDispatchToProps = {
    checkUserLogged
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHead)