import { useState } from 'react'
import NavItem from '../NavItem'
import Logo from '../../../../public/Logo'
import Subsection from '../../../../utils/subsection.json'
import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { connect } from 'react-redux'
import Needle from '../../../../public/Needle'
import cx from 'classnames'
import { logoutUser } from '../../../../redux/actions/user-actions'
import { useRouter } from 'next/router'

const NavBar = (props: any) => {
    const [activeIdx, setActiveIdx] = useState(0)
    const [isOpen, setOpen] = useState(false);
    const { user, logoutUser } = props
    const router = useRouter()

    console.log(router);

    const logoutHandler = () => {
        logoutUser()
        router.push("/")
    }

    return (
        <nav
            className="flex justify-around py-10"
            onMouseLeave={() => setActiveIdx(0)}
        >
            <div
                className="block md:hidden absolute z-50 right-10 md:right-20"
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
                className="hidden md:flex items-center space-x-32"
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
                {user ?
                <div
                    className="flex items-start relative"
                    onMouseEnter={() => setActiveIdx(3)}
                    onMouseLeave={() => setActiveIdx(0)}
                >
                    {activeIdx === 3 && (    
                        <div
                            className="w-7 absolute -ml-9 hidden lg:block"
                        >
                            <Needle
                                fillColor="altGreen"
                            />
                        </div>
                    )}
                    <button
                        onClick={() => logoutHandler()}
                        className={cx("mt-0.5 decoration-[3px] underline-offset-[6px] text-2xl md:text-xl xl:text-2xl font-medium text-coolGray", {
                            ['underline text-altGreen']: activeIdx === 3
                        })}
                    >
                        Logout
                    </button>
                </div>
                :
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
                }
            </ul>
            {isOpen && (
                <>
                <div
                    className="block md:hidden bg-altWhite absolute z-40 w-full h-screen"
                >
                    <ul
                        className="mt-20 mx-10 space-y-5"
                    >
                        <NavItem
                            text="Participate"
                            color="scarlet"
                            href="/participate"
                            hasDropDown={false}
                            subSectionData={Subsection["Subsection"]["Participate"]}
                            idx={1}
                            activeIdx={activeIdx}
                            setActiveIdx={setActiveIdx}
                        />
                        <ul className="space-y-2.5">
                            {Subsection["Subsection"]["Participate"].map(({
                                title,
                                description,
                                href
                            }) => {
                                return (
                                    <li key={title}>
                                        <Link
                                            href={href}
                                        >
                                            <div
                                                className="cursor-pointer"
                                            >
                                                <div
                                                    className="font-medium text-xl underline underline-offset-2"
                                                >
                                                    {title}
                                                </div>
                                                <span
                                                    className="font-normal text-lg"
                                                >
                                                    { description }
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    )
                                })}
                        </ul>
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
                        {user ?
                        <div
                            className="flex items-start relative"
                        >
                            <div
                                className="w-7 absolute -ml-9 hidden lg:block"
                            >
                                <Needle
                                    fillColor="altGreen"
                                />
                            </div>
                            <button
                                onClick={() => logoutHandler()}
                                className={cx("mt-0.5 decoration-[3px] underline-offset-[6px] text-2xl md:text-xl xl:text-2xl font-medium text-coolGray", {
                                    ['underline text-altGreen']: activeIdx === 3
                                })}
                            >
                                Logout
                            </button>
                        </div>
                        :
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
                        }
                    </ul>
                </div>
                </>
            )}
        </nav>
    )
}

const mapStateToProps = (state: any) => {
    return (
        {
            user: state.user.currentUser
        }
    )
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)