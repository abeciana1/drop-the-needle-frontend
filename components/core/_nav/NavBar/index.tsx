import NavItem from '../NavItem'

const NavBar = () => {
    return (
        <nav
            className=""
        >
            <ul
                className="flex justify-around"
            >
                <NavItem
                    text="Participate"
                    color="scarlet"
                    href="/"
                />
                <NavItem
                    text="Listen"
                    color="royalBlue"
                    href="/"
                />
                <NavItem
                    text="Signup"
                    color="altGreen"
                    href="/"
                />
            </ul>
        </nav>
    )
}

export default NavBar