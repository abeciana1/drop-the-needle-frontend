import Colors from '../utils/colors.json'

const Needle = ({ fillColor = "coolGray" }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 450 654.06"
        >
        <path
            d="M575 75.89S573.26 23 350 23 125 75.89 125 75.89L350 677zM436.91 52.11c18.84 1.65 34.64 3.79 47.85 6.17l-96.48 443-22 58.82 70.65-508z"
            transform="translate(-125 -22.97)"
            fill={Colors[fillColor]}
        />
        </svg>
    );
}

export default Needle