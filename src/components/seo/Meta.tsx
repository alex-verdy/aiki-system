import { FC, PropsWithChildren } from "react";
import Head from "../../../node_modules/next/head";
import { IMeta } from './meta.interface'

const getTitle = (title: string) => `${title} | Айки-Систем`

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                <meta name="yandex-verification" content="b4992a505c5a5dcc" />
                <meta name="yandex-verification" content="2806b9571ab85f3f" />
                <meta name="google-site-verification" content="ag7-C_VaghBxIO2yuk_42zKMhmMbJZYaIkGixU_UYPs" />
                <meta name="google-site-verification" content="xmgoV1YjczC6siPKqVKYptQ_3EqH6bDWWtdueIz3f2s" />
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
