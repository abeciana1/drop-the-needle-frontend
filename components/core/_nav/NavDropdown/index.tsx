import cx from 'classnames'
import Link from 'next/link'

interface NavDropdownI {
    showIdx: number;
    data?: any;
    currentIdx: number;
    setActiveIdx(): any;
}

const NavDropdown = ({
    showIdx,
    data,
    currentIdx,
    setActiveIdx
    }: NavDropdownI) => {
    return (
        <ul
            onMouseLeave={setActiveIdx}
            className={cx("z-50 w-96 absolute bg-white px-5 py-2 top-10", {
                ['opacity-0 invisible']: showIdx !== currentIdx,
                ['visible opacity-100']: showIdx === currentIdx
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