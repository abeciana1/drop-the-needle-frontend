import Link from 'next/link'

interface NavDropdownI {
    title: string;
    description: string;
    href: string;
}

const NavDropdown = ({
    title,
    description,
    href
}: NavDropdownI) => {

    return (
        <div>
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
        </div>
    )
}

export default NavDropdown