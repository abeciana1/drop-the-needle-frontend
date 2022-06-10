import Link from 'next/link'

interface NavDropdownI {
    data?: any;
}

const NavDropdown = ({
    data
    }: NavDropdownI) => {

    return (
        <div
            className="z-50 absolute bg-slate-500"
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
                        className="cursor-pointer"
                    >
                        {title}
                        <span>
                            { description }
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NavDropdown