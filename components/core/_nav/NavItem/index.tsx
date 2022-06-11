import { useState } from 'react'
import cx from 'classnames'
import Needle from '../../../../public/Needle'
import NavDropdown from '../NavDropdown'

interface INavItem {
    text: string;
    color: string;
    href: string;
    hasDropDown: boolean;
    subSectionData?: any;
}

const NavItem = ({
    text,
    color,
    href,
    hasDropDown,
    subSectionData
}: INavItem) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <li>
                <a
                    href={href}
                    onMouseEnter={toggleActive}
                    onMouseLeave={toggleActive}
                    // onMouseOver={toggleActive}
                    className="flex items-start"
                >
                    {active && (
                        <div
                            className="w-7 absolute -ml-9"
                        >
                            <Needle
                                fillColor={color}
                            />
                        </div>)
                    }
                    <span
                        className={cx("mt-0.5 decoration-[3px] underline-offset-[6px] text-xl font-medium text-coolGray", {
                            ['underline text-royalBlue']: color === 'royalBlue' && active,
                            ['underline text-altGreen']: color === 'altGreen' && active,
                            ['text-scarlet underline']: color === 'scarlet' && active,
                            ['underline text-ceruBlue']: color === 'ceruBlue' && active,
                            ['underline text-altOrange']: color === 'altOrange' && active
                        })}
                    >
                        { text }
                    </span>
                </a>
                {hasDropDown &&
                    <NavDropdown
                        show={active}
                        data={subSectionData}
                    />
                }
            </li>
        </>
    )
}

export default NavItem