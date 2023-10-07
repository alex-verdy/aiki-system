import { Service } from '@/service/car.service'
import { GetStaticProps, NextPage } from 'next'
import { IHistory } from "@/interfaces/history.interfaces";
import History from '@/components/screen/history/History';

const AboutPage: NextPage<IHistory> = ({ history }) => {

    return (
        <>
            <History history={history} />
        </>
    )
}

export const getStaticProps: GetStaticProps<IHistory> = async () => {
    const history = await Service.getHistory()

    return {
        props: { history },
        revalidate: 86400,
    }
}

export default AboutPage
