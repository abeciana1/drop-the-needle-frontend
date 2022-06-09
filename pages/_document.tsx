import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/core/_nav/NavBar'

const Document = () => {
    return (
        <Html lang="en">
        <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        </Head>
        <body className="mx-5 md:mx-10">
            <NavBar/>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}

export default Document