import NavItem from '../NavItem'
import Logo from '../../../../public/Logo'

const NavBar = () => {
    return (
        <nav
            className="flex justify-around pt-10"
        >
            <div
                className="w-32 md:w-24 mx-auto md:mx-0"
            >
                <Logo/>
            </div>
            <ul
                className="hidden md:flex items-center space-x-32"
            >
                <NavItem
                    text="Participate"
                    color="scarlet"
                    href="/participate"
                />
                <NavItem
                    text="Listen"
                    color="royalBlue"
                    href="/listen"
                />
                <NavItem
                    text="Signup"
                    color="altGreen"
                    href="/signup"
                />
            </ul>
        </nav>
    )
}

export default NavBar