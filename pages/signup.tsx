import { useState } from 'react'
import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'
import { Form } from '../components/_containers'
import CustomHead from '../components/core/CustomHead'
import { TextInput } from '../components/_forms/inputs'
import Spinner from '../components/core/Spinner'
import { LockClosedIcon } from '@heroicons/react/outline'

const Signup = () => {

    const [userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const passwordMatch = userSignup.password === confirmPassword && userSignup.password.length > 0 && confirmPassword.length > 0
    
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

    const confirmPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement
        setConfirmPassword(value)
    }
    
    return (
        <>
        <CustomHead
            title="Signup"
            description="Create an account"
        />
        <TwoColumnGrid addClass="gap-32">
            <div className="w-9/12 mx-auto">
                <Image
                    src="/Sweet Static - April 2020.jpg"
                    layout="responsive"
                    width={800}
                    height={973}
                />
            </div>
                <Form
                    onSubmit={signupSubmitHandler}
                    addClass="bg-zinc-300 px-10 py-10 rounded-xl lg:aspect-square my-auto max-w-[500px] max-h-[500px] h-auto grid grid-cols-1 content-center"
                >
                        <TextInput
                            name="name"
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
                        <TextInput
                            name="password"
                            placeholder="Password"
                            labelText="Password"
                            type="password"
                            value={userSignup.password}
                            fieldRequired={true}
                            onChange={userSignupOnChangeHandle}
                        />
                        <TextInput
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            labelText="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            fieldRequired={true}
                            onChange={confirmPasswordHandler}
                        />
                        <div
                            className="py-3 flex items-center"
                        >
                            {passwordMatch ?
                            <>
                                <LockClosedIcon
                                    className="h-8 w-8 text-green-400"
                                />
                                <span className="ml-5 text-lg font-medium">
                                    Passwords match
                                </span>
                            </>
                            :
                                <>
                                <Spinner
                                    addClass="text-slate-500 h-8 w-8"
                                />
                                <span
                                    className="ml-5 text-lg font-medium"
                                >
                                    Processing...
                                </span>
                                </>
                            }
                        </div>
                </Form>
            </TwoColumnGrid>
        </>
    )
}

export default Signup