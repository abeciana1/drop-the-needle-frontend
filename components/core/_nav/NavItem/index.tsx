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
            className="flex items-center"
        >
            <div
                className="w-5"
            >
                <Needle
                    fillColor={color}
                />
            </div>
            <span
                className="ml-3 text-lg font-medium"
            >
                { text }
            </span>
        </a>
    )
}

export default NavItem