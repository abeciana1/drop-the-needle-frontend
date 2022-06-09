import cx from 'classnames'
import Needle from '../../../../public/Needle'

interface INavItem {
    text: string;
    color: string;
    href: string;
}

const NavItem = ({
    text,
    color,
    href
}: INavItem) => {
    return (
        <a
            href={href}
            className="flex items-start"
        >
            <div
                className="w-7"
            >
                <Needle
                    fillColor={color}
                />
            </div>
            <span
                className={cx("mt-0.5 hover:underline decoration-[3px] underline-offset-[6px] ml-3 text-lg font-medium text-coolGray", {
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
    )
}

export default NavItem