import Home from "@/components/screen/Home/Home"
import { Service } from '@/service/car.service'
import { GetStaticProps, NextPage } from 'next'
import { IData } from "@/interfaces/data.interfaces";


const HomePage: NextPage<IData> = ({ progs, masters, halls, students }) => {

    return (
        <>
            <Home progs={progs} masters={masters} halls={halls} students={students} />
        </>
    )
}

export const getStaticProps: GetStaticProps<IData> = async () => {
    const progs = await Service.getProgramm()
    const masters = await Service.getMasters()
    const halls = await Service.getHalls()
    const students = await Service.getStudents()

    return {
        props: { progs, masters, halls, students },
        revalidate: 86400,
    }
}

export default HomePage
