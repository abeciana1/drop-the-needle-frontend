import cx from 'classnames'
import Link from 'next/link'

interface NavDropdownI {
    show: boolean;
    data?: any;
    setActive(show: boolean): any;
}

const NavDropdown = ({
    show,
    data,
    setActive
    }: NavDropdownI) => {

    return (
        <ul
            className={cx("z-50 w-96 absolute bg-white px-5 py-2 top-10", {
                ['opacity-0']: show === false,
            })}
        >
            {data.map(({
                title,
                description,
                href
            }: {
                title: string,
                description: string,
                href: string
            }) => (
                <li
                    className="block"
                >
                    <Link
                        href={href}
                    >
                        <div
                            className="cursor-pointer font-medium text-xl divide-y-4 divide-slate-300"
                        >
                            {title}
                            <div
                                className="font-normal text-lg"
                            >
                                { description }
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavDropdown