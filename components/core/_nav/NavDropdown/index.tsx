import Link from 'next/link'

interface NavDropdownI {
    title: string;
    description: string;
    href: string;
}

const NavDropdown = ({
    title,
    description,
    href }: NavDropdownI) => {

    return (
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
    )
}

export default NavDropdown