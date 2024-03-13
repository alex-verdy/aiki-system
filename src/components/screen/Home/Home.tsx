import {FC, useState, useEffect, useMemo, useContext} from 'react'
import Image from "next/image";
import Link from "next/link";
//@ts-ignore
import {Modal} from "next-modal";
import {IData} from "@/interfaces/data.interfaces";
import {IContact} from "@/interfaces/contacts.interface";
import {SidebarContext} from "@/components/layout/sideBarCtx";
import Layout from "@/components/layout/Layout";
import Subtract from './subtract/Subtract';
import Programms from "./programms/Programms";
import ProgrammsMob from "./programms/ProgrammsMob";
import Box from "./programms/Box";
import Card from "./masters/Master-card";
import Halls from "./halls/Halls";
import Back from "./Arrow/Back";
import Next from "./Arrow/Next";
import {Service} from "@/service/car.service"
import styles from "./Home.module.css";

const Home: FC<IData> = ({progs, masters, halls}) => {
    const [max, setMax] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);
    const [imgSize, setImgSize] = useState(0)
    const {city} = useContext(SidebarContext);
    const contacts = useMemo(() => Service.getContacts(), []);
    const currentContact = contacts.filter((v: IContact) => v.city.includes(city || ''))[0].phone;
    const currentContactRaw = currentContact.replace(/\(|\)|-/g, '');
    const [right, setRight] = useState(0)
    useEffect(() => {
        setMax(window.innerWidth)
    }, [])


    /*useEffect(() => {
        if(max > 1100){
             getWhite(imgSize)
        }
    }, [imgSize])*/
    const [count, setCount] = useState(0)
    const [coun, setCoun] = useState(0)

    /*const getWhite = (size: number) => {
        let i:number
        let pos: string = 'def'
        let stspace = (max - 1073.7)/2 + 286
        let word = [43.7, 63.6, 85.4, 91.5]
        let width = [73.7, 197.3, 342.7, 494.2]
        const getDat = (j:number) =>{
            setCoun(j)
            if(stspace + width[j] - word[j] < i){
                console.log('in')
                if(i - stspace - width[j] + word[j] < word[j]/2){
                    setRight(stspace + width[j] - i + 20)
                }else{
                    setRight(-(i - stspace - width[j] + word[j] + 15))
                    setCoun(j+1)
                }
            }
        }     
        if(max < size + 587){
            i = max- 587
        }else{
            i = size
        }if(stspace + 30 > i){
            setCoun(0)
            setRight(0)
            return
        }if(stspace + width[0] > i){
            getDat(0)
           console.log('rjkvo =', count, i, right, max, size)
            return
        } if(stspace + width[1]  > i){
            console.log(3)
            getDat(1)
           console.log('rjkvo =', count, i, right, max, size)
            return
        }if(stspace + width[2] > i){
            console.log(4)
            getDat(2)
            console.log('rjkvo =', count, i, right, max, size)
            return
        }if(stspace + width[3]  > i){
            console.log(5)
            getDat(3)
            return
        }
        setCoun(4)
    }*/
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
            <Layout title="Главная" right={right} count={coun}
                    description="АйКиСистем - клуб единоборств, с новым подходом к восточным боевым искусствам. Наши воспитанники получают необходимую базу по таким направлениям, как: айкидо, карате и джиу-джитсу. Такой подход помогает совмещать спортивные и прикладные направления. Мы находимся в Санкт-Петербурге, Перми, Ижевске и Каменке.">
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
                                <Subtract text='Групповые и индивидуальные занятия'/>
                                <Subtract text='Детские и взрослые группы'/>
                            </div>
                            <button onClick={() => {
                                setToggleModal(true);
                            }}>Записаться на пробное занятие
                            </button>
                        </div>

                    </div>
                    <Image
                        priority
                        src='/main-img.png'
                        width={955}
                        height={794}
                        alt='Бросок коше наге'
                        className={styles.back}
                        onLoad={(e) => setImgSize((e.target as HTMLImageElement).width)}/>

                </article>
                <article className={styles.programms}>
                    <h2>Дисциплины</h2>
                    <div className={styles.name}>
                        {progs.length ? (max > 600 ? progs.map(
                            prog => <Programms key={prog.id} name={prog.name} id={prog.id}/>
                        ) : (
                            <ProgrammsMob progs={progs}/>
                        )) : (
                            <div>Not found</div>
                        )}
                    </div>
                    <div className={styles.box}>
                        {progs.length ? progs.map(
                                prog => <Box key={prog.id} prog={prog}/>
                            ) :
                            <div>Not found</div>
                        }
                    </div>
                    <div className={styles.line}></div>
                    <p className={styles.text}>
                        Для детей мы предлагаем занятия, специально адаптированные под их возраст и физическую
                        подготовку.
                        В процессе тренировок они научатся основам единоборств, развивая свою координацию движений,
                        гибкость и
                        выносливость. Кроме того, тренировки помогают развить концентрацию, самодисциплину и уверенность
                        в себе.
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
                                master => <Card key={master.id} master={master}/>
                            ) : (max > 1000 ? (
                                    <>
                                        <span className={styles.arrow} onClick={() => getBack(3)}><Back/></span>
                                        <Card key={masters[count].id} master={masters[count]}/>
                                        <Card key={masters[count + 1].id} master={masters[count + 1]}/>
                                        <Card key={masters[count + 2].id} master={masters[count + 2]}/>
                                        <span className={styles.arrow} onClick={() => getBack(3)}><Next/></span>
                                    </>
                                ) : (max > 700 ? (
                                        <>
                                            <span className={styles.arrow} onClick={() => getBack(2)}><Back/></span>
                                            <Card key={masters[count].id} master={masters[count]}/>
                                            <Card key={masters[count + 1].id} master={masters[count + 1]}/>
                                            <span className={styles.arrow} onClick={() => getNext(2)}><Next/></span>
                                        </>
                                    ) : (
                                        <>
                                            <span className={styles.arrow} onClick={() => getBack(1)}><Back/></span>
                                            <Card key={masters[count].id} master={masters[count]}/>
                                            <span className={styles.arrow} onClick={() => getNext(1)}><Next/></span>
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
                        <br/>
                        <br/>
                        В нашем клубе под руководством профессиональных инструкторов, каждый найдет
                        свой путь развития
                        и самосовершенствования.
                    </p>
                </article>
                <article className={styles.halls} id="halls">
                    <h2>НАШИ ЗАЛЫ</h2>
                    {halls.length ? (
                        <Halls halls={halls}/>
                    ) : (
                        <div>Not found</div>
                    )}
                </article>
            </Layout>
            <Modal toggle={toggleModal} setToggle={setToggleModal}>
                <Modal.Header>
                    <h3 className="modal-container modal-header-css">Свяжитесь с нами</h3>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.modalBody}>
                        <p>Город: {city}</p>
                        <p>Телефон: <a href={`tel:${currentContactRaw}`}>{currentContact}</a></p>
                        <p style={{"marginTop": "10px"}}>Мессенджеры: </p>
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
