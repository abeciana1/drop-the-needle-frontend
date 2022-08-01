import { useEffect } from 'react'
import CustomHead from '../components/core/CustomHead'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user-actions'

const Logout = (props: any) => {

    const { user } = props

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         if (localStorage['dtnLogged'] === 'true' && user !== null) {
    //             logoutUser()
    //         } else {
    //             null
    //         }
    //     }
    // }, [])

    return (
        <>
            <CustomHead
                title="Logout"
                description=""
            />
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user.currentUser
    }
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)