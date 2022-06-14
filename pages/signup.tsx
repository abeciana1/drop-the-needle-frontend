import { useState } from 'react'
import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'
import { Form } from '../components/_containers'
import CustomHead from '../components/core/CustomHead'
import { TextInput } from '../components/_forms/inputs'

const Signup = () => {

    const [userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const signupSubmitHandler = () => {
        // e.preventDefault();
        console.log("submit")
    }
    
    const userSignupOnChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target as HTMLInputElement
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
                    name="Name"
                    placeholder="Name (First and Last)"
                    labelText="Name"
                    type="text"
                    value={userSignup.name}
                    fieldRequired={true}
                    onChange={userSignupOnChangeHandle}
                />
                <TextInput
                    name="email"
                    placeholder="Email Address"
                    labelText="Email Address"
                    type="text"
                    value={userSignup.email}
                    fieldRequired={true}
                    onChange={userSignupOnChangeHandle}
                />
            </Form>
            </TwoColumnGrid>
        </>
    )
}

export default Signup