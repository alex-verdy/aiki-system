import { IProgData } from "@/interfaces/prog.interface";
import { FC, useEffect, useState } from "react";
import styles from "./Programms.module.css"
import Link from "next/link";
import { Router, useRouter } from "next/router";
  

const ProgrammsMob: FC<IProgData> = ({ progs }) => {
    
    const { asPath } = useRouter();
    const [tab, setTab] = useState('/#%200')
    const [open, setOpen] = useState(false)

    const MobName = () => {
        setOpen(!open)
    }
    useEffect(() => {
        if (!asPath.includes('%')) {
            setTab('/#%200')
        } else {
            setTab(asPath)
        }
    }, [asPath])

    return (
        <div>
            <div className={styles.det}>
                {open ? (
                    <span onClick={MobName} className={open ? (styles.span_active) : (styles.span)}>Закрыть</span>
                ) : (
                    <span onClick={MobName} className={open ? (styles.span_active) : (styles.span)}>Выбрать Дисциплину</span>
                )}

                {open! && (
                    <div className={styles.det_cont} >
                        {progs.map(
                            prog => <Link onClick={MobName} href={`/#%20${String(prog.id)}`} id={styles.name} key={prog.id} className={tab == `/#%20${String(prog.id)}` ? styles.active : styles.default}><span id={String(prog.id)}>{prog.name}</span></Link>
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}

export default ProgrammsMob