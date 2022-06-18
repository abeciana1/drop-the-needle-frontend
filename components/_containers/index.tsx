import cx from 'classnames'

interface FormI {
    children: any;
    addClass?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({
    children,
    addClass = "",
    onSubmit }: FormI) => {
    return (
        <form
            onSubmit={onSubmit}
            className={cx("my-auto", {
                [addClass]: addClass
            })}
        >
            { children }
        </form>
    )
}