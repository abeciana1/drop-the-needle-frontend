import { useState } from 'react'
import NavItem from '../NavItem'
import Logo from '../../../../public/Logo'
import Subsection from '../../../../utils/subsection.json'
import { Squash as Hamburger } from 'hamburger-react'

const NavBar = () => {
    const [activeIdx, setActiveIdx] = useState(0)
    const [isOpen, setOpen] = useState(false);
    
    return (
        <nav
            className="flex justify-around py-10"
            onMouseLeave={() => setActiveIdx(0)}
        >
            <div
                className="block lg:hidden absolute right-10 md:right-20"
            >
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    rounded
                    color="#080807"
                    easing="ease-in"
                />
            </div>
            <a
                href="/"
                rel="noreferrer"
                className="w-36 md:w-24 mx-auto md:mx-0 xl:w-44"
            >
                <Logo/>
            </a>
            <ul
                className="hidden lg:flex items-center space-x-32"
            >
                <NavItem
                    text="Participate"
                    color="scarlet"
                    href="/participate"
                    hasDropDown={true}
                    subSectionData={Subsection["Subsection"]["Participate"]}
                    idx={1}
                    activeIdx={activeIdx}
                    setActiveIdx={setActiveIdx}
                />
                <NavItem
                    text="Listen"
                    color="royalBlue"
                    href="/listen"
                    hasDropDown={false}
                    subSectionData={Subsection["Subsection"]["Listen"]}
                    idx={2}
                    activeIdx={activeIdx}
                    setActiveIdx={setActiveIdx}
                />
                <NavItem
                    text="Login/Signup"
                    color="altGreen"
                    href="/login"
                    hasDropDown={false}
                    subSectionData={Subsection["Subsection"]["Signup"]}
                    idx={3}
                    activeIdx={activeIdx}
                    setActiveIdx={setActiveIdx}
                />
            </ul>
            {isOpen && (
                <>
                <div
                    className="block lg:hidden absolute z-50 right-10"
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        rounded
                        color="#080807"
                        easing="ease-in"
                    />
                </div>
                <div
                    className="block lg:hidden bg-altWhite absolute z-40 w-full h-screen"
                >
                    <ul
                        className="mt-20"
                    >
                        <NavItem
                            text="Participate"
                            color="scarlet"
                            href="/participate"
                            hasDropDown={true}
                            subSectionData={Subsection["Subsection"]["Participate"]}
                            idx={1}
                            activeIdx={activeIdx}
                            setActiveIdx={setActiveIdx}
                        />
                        <NavItem
                            text="Listen"
                            color="royalBlue"
                            href="/listen"
                            hasDropDown={false}
                            subSectionData={Subsection["Subsection"]["Listen"]}
                            idx={2}
                            activeIdx={activeIdx}
                            setActiveIdx={setActiveIdx}
                        />
                        <NavItem
                            text="Login/Signup"
                            color="altGreen"
                            href="/login"
                            hasDropDown={false}
                            subSectionData={Subsection["Subsection"]["Signup"]}
                            idx={3}
                            activeIdx={activeIdx}
                            setActiveIdx={setActiveIdx}
                        />
                    </ul>
                </div>
                </>
            )}
        </nav>
    )
}

export default NavBar