import Layout from "@/components/layout/Layout";
import { IHistory } from "@/interfaces/history.interfaces";
import { FC } from 'react'
import styles from './History.module.css'
import Paragraph from './Paragraph/Paragraph'
import Image from "next/image";

const History: FC<IHistory> = ({ history }) => {

    return (
        <Layout title="О Нас" description="АйКиСистем - синтез различных видов боевых искусств и их направления. Реальное айкидо, Томики и другие стили были проанализированы для создания современной системы единоборств с восточными корнями.">
            <article className={styles.box}>
                <h2 id="history">ИСТОРИЯ КЛУБА</h2>
                <div className={styles.cont}>
                     <Image 
                    src='/team.jpg'
                    alt="aiki-system team"
                    width={511}
                    height={340}
                    className={styles.img}/>
                {history.length ? history.map(
                    (histor,index) =>
                        <Paragraph history={histor} key={index} />
                ) :
                    <div>Not found</div>
                }
                </div>
               
                <h2>сотрудничество</h2>
                <div className={styles.paragraph}>
                    <p> За время существования клуба, у нас сформировалась четкая методическая  система обучения.
                    Мы готовы поделиться системой и предлагаем различные форматы сотрудничества:
                    <ul>
                        <li>Курсовое обучение группы.</li>
                        <li>Проведение мастер-классов.</li>
                        <li>Организация филиала клуба.</li>
                    </ul>
                    По вопросу сотрудничества, свяжитесь с нами
                            <a className={styles.iconLink} href={`https://t.me/+79816893743`}><Image
                                width={30}
                                height={30}
                                src={"/tg.svg"}
                                alt="telegram logo"
                            /></a>
                            <a className={styles.iconLink} href={`https://wa.me/79816893743`}>
                                <Image
                                    width={30}
                                    height={30}
                                    src={"/wu.svg"}
                                    alt="what`s up logo"
                                /></a>
                        </p>
                </div>
            </article>
        </Layout>
    )
}

export default History
