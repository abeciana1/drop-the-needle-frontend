import cx from 'classnames'
import Needle from '../../../../public/Needle'
import NavDropdown from '../NavDropdown'

interface INavItem {
    text: string;
    color: string;
    href: string;
    hasDropDown: boolean;
    subSectionData?: any;
    idx: number;
    activeIdx: number;
    setActiveIdx(idx: number): any;
}

const NavItem = ({
    text,
    color,
    href,
    hasDropDown,
    subSectionData,
    idx,
    activeIdx,
    setActiveIdx
}: INavItem) => {

    const toggleActive = () => {
        setActiveIdx(idx)
    }

    const handleDropDownClose = () => {
        setActiveIdx(0)
    }

    return (
        <>
            <li
                className="flex items-start relative"
                onMouseEnter={toggleActive}
            >
                {activeIdx === idx && (
                    <div
                        className="w-7 absolute -ml-9 hidden lg:block"
                    >
                        <Needle
                            fillColor={color}
                        />
                    </div>)
                }
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx("mt-0.5 decoration-[3px] underline-offset-[6px] text-xl font-medium text-coolGray dropdown dropdown-hover", {
                        ['underline text-royalBlue']: color === 'royalBlue' && activeIdx === idx,
                        ['underline text-altGreen']: color === 'altGreen' && activeIdx === idx,
                        ['underline text-scarlet']: color === 'scarlet' && activeIdx === idx,
                        ['underline text-ceruBlue']: color === 'ceruBlue' && activeIdx === idx,
                        ['underline text-altOrange']: color === 'altOrange' && activeIdx === idx
                    })}
                >
                    { text }
                </a>
                {hasDropDown && activeIdx === idx &&
                        <NavDropdown
                            currentIdx={idx}
                            setActiveIdx={handleDropDownClose}
                            showIdx={activeIdx}
                            data={subSectionData}
                        />
                }
            </li>
        </>
    )
}

export default NavItem