import cx from 'classnames'

interface LayoutI {
    children: any;
    addClass?: string;
}

export const TwoColumnGrid = ({ children, addClass="" }: LayoutI) => {
    return (
        <section
            className={cx("grid grid-cols-1 md:grid-cols-2", {
                [addClass]: addClass
            })}
        >
            { children }
        </section>
    )
}

export const ThreeColumnGrid = ({ children, addClass="" }: LayoutI) => {
    return (
        <section
            className={cx("grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3", {
                [addClass]: addClass
            })}
        >
            { children }
        </section>
    )
}