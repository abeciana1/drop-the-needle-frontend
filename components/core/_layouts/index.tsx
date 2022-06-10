import cx from 'classnames'

interface TwoColumnGrid {
    children: any;
    addClass?: string;
}

const TwoColumnGrid = ({ children, addClass="" }: TwoColumnGrid) => {
    return (
        <section
            className={cx("grid grid-cols-1 md:grid-cols-2 gap-20", {
                [addClass]: addClass
            })}
        >
            { children }
        </section>
    )
}