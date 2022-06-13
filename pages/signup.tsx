import { useState } from 'react'
import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'
import { Form } from '../components/_containers'
import CustomHead from '../components/core/CustomHead'
import { TextInput } from '../components/_forms/inputs'

const Signup = () => {

    const [userSignup, setUserSignup] = useState({
        firstName: '',
        email: '',
        password: ''
    })
    
    const signupSubmitHandler = () => {
        // e.preventDefault();
        console.log("submit")
    }
    
    const userSignupOnChangeHandle = (e: React.FormEvent<HTMLFormElement>) => {

        const { name, value } = e.target as HTMLInputElement
        setUserSignup({
            ...userSignup,
            [name]: value
        })
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
                <TextInput
                    name="firstName"
                    labelText="First name"
                    type="text"
                    value={userSignup.firstName}
                    fieldRequired={true}
                    onChange={userSignupOnChangeHandle}
                />
            </Form>
            </TwoColumnGrid>
        </>
    )
}

export default Signup