import styles from "./Home.module.css";
import { FC, useState, useEffect, useMemo, useContext } from 'react'
import Layout from "@/components/layout/Layout";
import Subtract from './subtract/Subtract';
import Image from "next/image";
import { IData } from "@/interfaces/data.interfaces";
import Programms from "./programms/Programms";
import ProgrammsMob from "./programms/ProgrammsMob";
import Box from "./programms/Box";
import Card from "./masters/Master-card";
import Halls from "./halls/Halls";
import Link from "next/link";
import Back from "./Arrow/Back";
import Next from "./Arrow/Next";
//@ts-ignore
import { Modal } from "next-modal";
import { useSidebarContext, SidebarContext } from "@/components/layout/sideBarCtx";
import { Service } from "@/service/car.service"
import { IContact } from "@/interfaces/contacts.interface";

const Home: FC<IData> = ({ progs, masters, halls }) => {
    const [max, setMax] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);
    const { city } = useContext(SidebarContext);
    const contacts = useMemo(() => Service.getContacts(), []);
    const currentContact = contacts.filter((v: IContact) => v.city.includes(city || ''))[0].phone;
    const currentContactRaw = currentContact.replace(/\(|\)|-/g, '');

    useEffect(() => {

        setMax(window.innerWidth)

    }, [])

    const [count, setCount] = useState(0)

    const getNext = (number: number) => {
        if (count + number == masters.length) {
            setCount(count - masters.length + number)
        } else {
            setCount(count + 1)
        }
    }
    const getBack = (number: number) => {
        if (count == 0) {
            setCount(count + masters.length - number)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <>
            <Layout title="Главная" description="Клуб боевых искусств">
                <article className={styles.first}>
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <h1>КБИ <span>«Айки-Систем»</span></h1>
                            <h3> спорт самооборона искусство </h3>
                            <h6>
                                Присоединяйтесь к нашему клубу
                                и откройте новые грани своего потенциала!
                            </h6>
                            <div>
                                <Subtract text='Групповые и индивидуальные занятия' />
                                <Subtract text='Детские и взрослые группы' />
                            </div>
                            <button onClick={() => {
                                setToggleModal(true);
                            }}>Записаться на пробное занятие</button>
                        </div>

                    </div>
                    <Image
                        priority
                        src='/back.jpg'
                        width={955}
                        height={794}
                        alt='Бросок коше наге'
                        className={styles.back} />
                </article>
                <article className={styles.programms}>
                    <h2>Дисциплины</h2>
                    <div className={styles.name}>
                        {progs.length ? (max > 600 ? progs.map(
                            prog => <Programms key={prog.id} name={prog.name} id={prog.id} />
                        ) : (
                            <ProgrammsMob progs={progs} />
                        )) : (
                            <div>Not found</div>
                        )}
                    </div>
                    <div className={styles.box}>
                        {progs.length ? progs.map(
                            prog => <Box key={prog.id} prog={prog} />
                        ) :
                            <div>Not found</div>
                        }
                    </div>
                    <div className={styles.line}></div>
                    <p className={styles.text}>
                        Для детей мы предлагаем занятия, специально адаптированные под их возраст и физическую подготовку.
                        В процессе тренировок они научатся основам единоборств, развивая свою координацию движений, гибкость и
                        выносливость. Кроме того, тренировки помогают развить концентрацию, самодисциплину и уверенность в себе.
                    </p>
                </article>
                <article className={styles.history}>
                    <div>
                        <h2>ИСТОРИЯ <span>КЛУБА</span></h2>
                        <Link href='/about_us/#history'>Посмотреть историю нашего клуба</Link>
                    </div>
                </article>
                <article className={styles.master}>
                    <h2>ИНСТРУКТОРЫ</h2>
                    <div className={styles.cont}>

                        {masters.length ? (max > 1200 ? masters.map(
                            master => <Card key={master.id} master={master} />
                        ) : (max > 1000 ? (
                            <>
                                <span className={styles.arrow} onClick={() => getBack(3)}><Back /></span>
                                <Card key={masters[count].id} master={masters[count]} />
                                <Card key={masters[count + 1].id} master={masters[count + 1]} />
                                <Card key={masters[count + 2].id} master={masters[count + 2]} />
                                <span className={styles.arrow} onClick={() => getBack(3)}><Next /></span>
                            </>
                        ) : (max > 700 ? (
                            <>
                                <span className={styles.arrow} onClick={() => getBack(2)}><Back /></span>
                                <Card key={masters[count].id} master={masters[count]} />
                                <Card key={masters[count + 1].id} master={masters[count + 1]} />
                                <span className={styles.arrow} onClick={() => getNext(2)}><Next /></span>
                            </>
                        ) : (
                            <>
                                <span className={styles.arrow} onClick={() => getBack(1)}><Back /></span>
                                <Card key={masters[count].id} master={masters[count]} />
                                <span className={styles.arrow} onClick={() => getNext(1)}><Next /></span>
                            </>
                        )
                        )
                        )) :
                            <div>Not found</div>
                        }

                    </div>
                    <p>
                        Все инструкторы клуба являются действующими спортсменами с многолетним
                        опытом тренерской деятельности. Имеют педагогическое и спортивное образование.
                        Постоянно совершенствуются в области спорта, методической работы и восстановительной
                        физкультуры.
                        <br />
                        <br />
                        В нашем клубе под руководством профессиональных инструкторов, каждый найдет
                        свой путь развития
                        и самосовершенствования.
                    </p>
                </article>
                <article className={styles.halls} id="halls">
                    <h2>НАШИ ЗАЛЫ</h2>
                    {halls.length ? (
                        <Halls halls={halls} />
                    ) : (
                        <div>Not found</div>
                    )}
                </article>
            </Layout >
            <Modal toggle={toggleModal} setToggle={setToggleModal}>
                <Modal.Header>
                    <h3 className="modal-container modal-header-css">Свяжитесь с нами</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.modalBody}>
                        <p>Город: {city}</p>
                        <p >Телефон: <a href={`tel:${currentContactRaw}`}>{currentContact}</a></p>
                        <p style={{"marginTop":"10px"}}>Мессенджеры: </p>
                        <p className={styles.icon}>
                            <a className={styles.iconLink} href={`https://t.me/${currentContactRaw}`}><Image
                                width={30}
                                height={30}
                                src={"/tg.svg"}
                                alt="telegram logo"
                            /></a>
                            <a className={styles.iconLink} href={`https://wa.me/${currentContactRaw.replace('+', "")}`}>
                                <Image
                                    width={30}
                                    height={30}
                                    src={"/wu.svg"}
                                    alt="what`s up logo"
                                /></a>
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Home