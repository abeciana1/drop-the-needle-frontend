import cx from 'classnames'

interface FormI {
    children: any;
    addClass?: string;
}

export const Form = ({ children, addClass="" }: FormI) => {
    return (
        <form
            className={cx("", {
                [addClass]: addClass
            })}
        >
            { children }
        </form>
    )
}