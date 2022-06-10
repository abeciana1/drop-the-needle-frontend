import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'
import { Form } from '../components/_containers'
import CustomHead from '../components/core/CustomHead'

const Signup = () => {

    const signupSubmitHandler = () => {
        // e.preventDefault();
        console.log("submit")
    }

    return (
        <>
        <CustomHead
            title="Signup"
            description="Create an account"
        />
        <TwoColumnGrid>
            <div>
                <Image
                    src="/Sweet Static - April 2020.jpg"
                    layout="responsive"
                    width={800}
                    height={973}
                />
            </div>
            <Form
                onSubmit={signupSubmitHandler}
                addClass=""
            >

            </Form>
            </TwoColumnGrid>
        </>
    )
}

export default Signup