import Head from 'next/head'

interface ICustomHead {
    title: string;
    description: string;
}

const CustomHead = ({
    title,
    description
}: ICustomHead) => {

    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description } />
        </Head>
    )
}

export default CustomHead