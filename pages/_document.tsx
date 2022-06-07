import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang="en">
        <Head>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="mx-5 md:mx-10">
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}

export default Document