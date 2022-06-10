import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'

const Signup = () => {

    return (
        <TwoColumnGrid>
            <div>
                <Image
                    src="/Sweet Static - April 2020.jpg"
                    layout="responsive"
                    width={800}
                    height={973}
                />
            </div>
        </TwoColumnGrid>
    )
}

export default Signup