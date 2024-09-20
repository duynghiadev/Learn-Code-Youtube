import Head from "next/head";
import "../assets/style.scss";

export default function MyApp({ Component, pageProps }) {
    // Component -> Dai dien cho 1 Page match url 

    return (
        <div className="root-app">
            <Head>
                <title>Create Next App Edit</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/global.css" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}