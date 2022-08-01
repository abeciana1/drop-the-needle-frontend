import CustomHead from '../components/core/CustomHead'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user-actions'

const Logout = () => {

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