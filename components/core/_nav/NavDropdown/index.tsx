import cx from 'classnames'
import Link from 'next/link'

interface NavDropdownI {
    show: boolean;
    data?: any;
}

const NavDropdown = ({
    show,
    data
    }: NavDropdownI) => {

    return (
        <ul
            className={cx("z-50 absolute bg-white px-5 py-2 top-28", {
                ['block']: show,
                ['hidden']: show === false
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
            ))}
        </ul>
    )
}

export default NavDropdown