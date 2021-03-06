import { useState } from 'react'
import { TwoColumnGrid } from '../components/core/_layouts'
import Image from 'next/image'
import { Form } from '../components/_containers'
import CustomHead from '../components/core/CustomHead'
// import { TextInput } from '../components/_forms/inputs'
import { SolidClickButton } from '../components/core/_buttons/index'

const Login = () => {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const loginSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log("login")
    }

    const userLoginOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    return (
        <>
            <CustomHead
                title="Login"
                description="Log into your account"
            />
            <div className="text-center pb-20 font-medium">
                <h1>Login</h1>
            </div>
            <TwoColumnGrid>
                <div className="w-9/12 mx-auto">
                    <Image
                        src="/Sweet Static - April 2020.jpg"
                        layout="responsive"
                        width={800}
                        height={973}
                    />
                </div>
                <Form
                    onSubmit={loginSubmitHandler}
                    addClass="bg-zinc-300 px-10 py-10 rounded-xl my-auto h-auto grid grid-cols-1 content-center"
                >
                        <input
                            name="email"
                            placeholder="Email Address"
                            // labelText="Email Address"
                            type="text"
                            value={userLogin.email}
                            // fieldRequired={true}
                            required={true}
                            onChange={userLoginOnChangeHandler}
                        />
                        <input
                            name="password"
                            placeholder="Password"
                            // labelText="Password"
                            type="password"
                            value={userLogin.password}
                            // fieldRequired={true}
                            required={true}
                            onChange={userLoginOnChangeHandler}
                        />
                        <div className="py-3">
                            <SolidClickButton
                                text="Login"
                                color="scarlet"
                            />
                        </div>
                </Form>
            </TwoColumnGrid>
        </>
    )
}

export default  Login