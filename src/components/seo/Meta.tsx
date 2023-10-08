import { FC, PropsWithChildren } from "react";
import Head from "../../../node_modules/next/head";
import { IMeta } from './meta.interface'

const getTitle = (title: string) => `${title} | Айки-Систем`

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="yandex-verification" content="b4992a505c5a5dcc" />
                <title>{getTitle(title)}</title>
                {description ? (
                    <>
                        <meta name="description" content={description} />
                        <meta name="og:title" content={getTitle(title)} />
                        <meta name="og:description" content={description} />
                    </>
                ) : ('')}
            </Head>
            {children}
        </>
    )
}

export default Meta
