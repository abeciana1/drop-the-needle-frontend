import NavItem from '../NavItem'
import Logo from '../../../../public/Logo'
import Subsection from '../../../../utils/subsection.json'

const NavBar = () => {
    return (
        <nav
            className="flex justify-around py-10"
        >
            <a
                href="/"
                className="w-32 md:w-24 mx-auto md:mx-0"
            >
                <Logo/>
            </a>
            <ul
                className="hidden md:flex items-center space-x-32"
            >
                <NavItem
                    text="Participate"
                    color="scarlet"
                    href="/participate"
                    hasDropDown={true}
                    subSectionData={Subsection["Subsection"]["Participate"]}
                />
                <NavItem
                    text="Listen"
                    color="royalBlue"
                    href="/listen"
                    hasDropDown={false}
                    subSectionData={Subsection["Subsection"]["Listen"]}
                />
                <NavItem
                    text="Signup"
                    color="altGreen"
                    href="/signup"
                    hasDropDown={false}
                    subSectionData={Subsection["Subsection"]["Signup"]}
                />
            </ul>
        </nav>
    )
}

export default NavBar