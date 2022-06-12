import { useState } from 'react'
import cx from 'classnames'
import Needle from '../../../../public/Needle'
import NavDropdown from '../NavDropdown'
// import './index.css'

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
            <li
                className="flex items-start relative"
                onMouseEnter={toggleActive}
                onMouseLeave={toggleActive}
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
                <a
                    href={href}
                    className={cx("mt-0.5 decoration-[3px] underline-offset-[6px] text-xl font-medium text-coolGray", {
                        ['underline text-royalBlue']: color === 'royalBlue' && active,
                        ['underline text-altGreen']: color === 'altGreen' && active,
                        ['underline text-scarlet']: color === 'scarlet' && active,
                        ['underline text-ceruBlue']: color === 'ceruBlue' && active,
                        ['underline text-altOrange']: color === 'altOrange && active'
                    })}
                >
                    { text }
                </a>
                    {hasDropDown &&
                        <NavDropdown
                            setActive={setActive}
                            show={active}
                            data={subSectionData}
                        />
                    }
            </li>
        </>
    )
}

export default NavItem