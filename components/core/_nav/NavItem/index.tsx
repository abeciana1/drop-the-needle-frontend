import Needle from '../../../../public/Needle'

interface INavItem {
    text: string;
    // color: string;
}

const NavItem = ({
    text,
    // color
}: INavItem) => {
    return (
        <div
            className="flex"
        >
            <div
                className="w-5"
            >
                <Needle/>
            </div>
            <span
                className="ml-3"
            >
                { text }
            </span>
        </div>
    )
}

export default NavItem