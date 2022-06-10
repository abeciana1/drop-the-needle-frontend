import Link from 'next/link'

interface NavDropdownI {
    data?: any;
}

const NavDropdown = ({
    data
    }: NavDropdownI) => {

    return (
        <div
            className=""
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
                    <div>
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