import { useState } from 'react'
import cx from 'classnames'
import Needle from '../../../../public/Needle'

interface INavItem {
    text: string;
    color: string;
    href: string;
    hasDropDown: boolean;
}

const NavItem = ({
    text,
    color,
    href,
    hasDropDown
}: INavItem) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <li>
            <a
                href={href}
                onMouseEnter={toggleActive}
                onMouseLeave={toggleActive}
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
                    className={cx("mt-0.5 hover:underline decoration-[3px] underline-offset-[6px] text-xl font-medium text-coolGray", {
                        ['hover:text-royalBlue']: color === 'royalBlue',
                        ['hover:text-altGreen']: color === 'altGreen',
                        ['hover:text-scarlet']: color === 'scarlet',
                        ['hover:text-ceruBlue']: color === 'ceruBlue',
                        ['hover:text-altOrange']: color === 'altOrange'
                    })}
                >
                    { text }
                </span>
            </a>
            {hasDropDown}
        </li>
    )
}

export default NavItem