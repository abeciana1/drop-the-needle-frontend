
interface TextInputI {
    name: string;
    labelText: string;
    type: string;
    value: string;
    fieldRequired?: boolean;
    onChange: (e: React.FormEvent<HTMLFormElement>) => any;
}

export const TextInput = ({
    name,
    labelText,
    type,
    value,
    fieldRequired,
    onChange
}: TextInputI) => {
    return (
        <>
            <label>{ labelText }</label>
            <input
                name={name}
                type={type}
                value={value}
                required={fieldRequired}
                onChange={(e) => onChange(e)}
                // onChange={onChange}
            />
        </>
    )
}