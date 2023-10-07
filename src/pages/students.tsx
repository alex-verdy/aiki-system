
import { Service } from '@/service/car.service'
import { NextPage, GetStaticProps } from 'next'
import Students from '@/components/screen/students/Students';
import { IStudentData } from '@/interfaces/students.interface';

const StudentsPage: NextPage<IStudentData> = ({ students }) => {
    return (
        <>
            <Students students={students} />
        </>
    )
}

export const getStaticProps: GetStaticProps<IStudentData> = async () => {
    const students = await Service.getStudents();

    return {
        props: { students },
        revalidate: 86400,
    }
}



export default StudentsPage
