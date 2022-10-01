import { useState } from 'react';
import cx from 'classnames'

interface IButtonProps {
    text: string;
    href?: string; //* leave optional for none anchor buttons
    color: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

//! create separate buttons for href and onClick

export const SolidClickButton = ({
    text,
    color,
    onClick,
    disabled
}: IButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cx("px-3 py-1 rounded-md text-2xl", {
                ["bg-altOrange text-coolGray"]: color === "altOrange",
                ["bg-altGreen text-altWhite"]: color === "altGreen",
                ["bg-royalBlue text-altWhite"]: color === "royalBlue",
                ["bg-ceruBlue text-altWhite"]: color === "ceruBlue",
                ["bg-scarlet text-altWhite"]: color === "scarlet",
                ["bg-coolGray text-altWhite"]: color === "coolGray",
                ['cursor-not-allowed']: disabled
            })}
        >
            { text }
        </button>
    )
}

export const SolidHrefButton = ({
    text,
    color,
    href,
    disabled
}: IButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                disabled={disabled}
                className={cx("px-3 py-2 rounded-md text-2xl", {
                    ["bg-altOrange text-coolGray"]: color === "altOrange",
                    ["bg-altGreen text-altWhite"]: color === "altGreen",
                    ["bg-royalBlue text-altWhite"]: color === "royalBlue",
                    ["bg-ceruBlue text-altWhite"]: color === "ceruBlue",
                    ["bg-scarlet text-altWhite"]: color === "scarlet",
                    ["bg-coolGray text-altWhite"]: color === "coolGray",
                    ['cursor-not-allowed']: disabled
                })}
            >
                { text }
            </button>
        </a>
    )
}

export const OutlineClickButton = ({
    text,
    color,
    onClick,
    disabled
}: IButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
                className={cx("bg-altWhite px-3 py-1 rounded-md text-2xl", {
                    ["border-4 border-altOrange text-altOrange"]: color === "altOrange",
                    ["border-4 border-altGreen text-altGreen"]: color === "altGreen",
                    ["border-4 border-royalBlue text-royalBlue"]: color === "royalBlue",
                    ["border-4 border-ceruBlue text-ceruBlue"]: color === "ceruBlue",
                    ["border-4 border-scarlet text-scarlet"]: color === "scarlet",
                    ["border-4 border-coolGray text-coolGray"]: color === "coolGray",
                    ['cursor-not-allowed']: disabled
                })}
        >
            { text }
        </button>
    )
}

export const OutlineHrefButton = ({
    text,
    color,
    href,
    disabled
}: IButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                disabled={disabled}
                className={cx("bg-altWhite px-3 py-1 rounded-md text-2xl", {
                    ["border-4 border-altOrange text-altOrange"]: color === "altOrange",
                    ["border-4 border-altGreen text-altGreen"]: color === "altGreen",
                    ["border-4 border-royalBlue text-royalBlue"]: color === "royalBlue",
                    ["border-4 border-ceruBlue text-ceruBlue"]: color === "ceruBlue",
                    ["border-4 border-scarlet text-scarlet"]: color === "scarlet",
                    ["border-4 border-coolGray text-coolGray"]: color === "coolGray",
                    ['cursor-not-allowed']: disabled
                })}
            >
                { text }
            </button>
        </a>
    )
}

interface IShareButtonProps {
    text: string;
    textColor: string;
    disabled?: boolean;
    subject?: any;
    body?: any;
    email?: string;
    children?: any;
    backgroundColor?: string;
    sms?: boolean;
    icon: React.ElementType;
}

export const ShareBtn = ({
    text,
    email,
    icon,
    subject,
    body,
    textColor,
    backgroundColor
}: IShareButtonProps) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    return (
        <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}
            className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['bg-royalBlue']: backgroundColor === 'royalBlue',
                ['bg-scarlet']: backgroundColor === 'scarlet',
                ['rounded-lg']: open
            })}
            onMouseEnter={expandHandler}
            onMouseLeave={expandHandler}
        >
            <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['text-coolGray']: textColor === 'coolGray',
                ['mx-auto']: open === false
            })} />
            {open &&
                <div className="font-medium ml-2 whitespace-nowrap">
                    {text}
                </div>
            }
        </a>
    )
}