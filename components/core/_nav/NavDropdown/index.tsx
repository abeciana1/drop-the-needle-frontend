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
            className={cx("z-50 w-96 absolute top-12 divide-y-2 divide-slate-200", {
                ['hidden']: showIdx !== currentIdx,
                ['block']: showIdx === currentIdx
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
                    className="first:rounded-t-xl last:rounded-b-xl block px-5 py-2 text-coolGray bg-white hover:text-altWhite hover:bg-slate-500"
                >
                    <Link
                        href={href}
                    >
                        <div
                            className="cursor-pointer"
                        >
                            <div
                                className="font-medium text-xl underline underline-offset-2"
                            >
                                {title}
                            </div>
                            <span
                                className="font-normal text-lg"
                            >
                                { description }
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavDropdown