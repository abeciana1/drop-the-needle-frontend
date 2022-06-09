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
            className=""
        >
            <div
                className=""
            >
                <Needle/>
            </div>
            <span>
                { text }
            </span>
        </div>
    )
}

export default NavItem