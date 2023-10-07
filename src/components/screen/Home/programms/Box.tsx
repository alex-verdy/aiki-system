import { IProgSingle } from "@/interfaces/prog.interface";
import { FC, useEffect, useState, useContext, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from './Programms.module.css'
import { useSidebarContext, SidebarContext } from "@/components/layout/sideBarCtx";
import { Service } from "@/service/car.service"
import { IContact } from "@/interfaces/contacts.interface";
//@ts-ignore
import { Modal } from "next-modal";

const Box: FC<IProgSingle> = ({ prog }) => {
    const [toggleModal, setToggleModal] = useState(false);
    const { city } = useContext(SidebarContext);
    const contacts = useMemo(() => Service.getContacts(), []);
    const currentContact = contacts.filter((v: IContact) => v.city.includes(city || ''))[0].phone;
    const currentContactRaw = currentContact.replace(/\(|\)|-/g, '');
    const { asPath } = useRouter();
    const [tab, setTab] = useState('/#%200')
    useEffect(() => {
        if (!asPath.includes('%')) {
            setTab('/#%200')
        } else {
            setTab(asPath)
        }
    }, [asPath])
    return (
        <div className={tab == `/#%20${String(prog.id)}` ? styles.appear : styles.disappear}>

            <Image
                src={prog.src}
                width={330}
                height={212}
                alt={prog.name} />
            <div className={styles.text}>
                <h4 className={styles.name}>{prog.name}</h4>
                <div>{prog.text}</div>
                <button className={styles.button} onClick={() => {
                                setToggleModal(true);
                            }}>Записаться</button>
            </div>
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
        </div>
    )
}

export default Box