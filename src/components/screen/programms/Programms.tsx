import Layout from "@/components/layout/Layout";
import { FC, useState } from 'react'
import Old from "./Old";
import Orange from "./Orange";
import styles from './Programms.module.css'
import Red from "./Red";
import White from "./White";
import Yellow from "./Yellow";

const Programms: FC = () => {

    const[act, setAct] = useState('w') 
    const getAct = (color: string) => {
        if(color == act){
            return
        }else{
            setAct(color)
        }
    }

    return (
        <Layout title="Программы" description="Экзамены айкидо">
            <article className={styles.box}>
                <h2>Аттестационные требования</h2>
                <div className={styles.belt}>
                    <span>Выберете пояс:</span>
                    <div className={styles.b_box}>
                        <button id={styles.w} onClick={() => getAct('w')}></button>
                        <button id={styles.y} onClick={() => getAct('y')}></button>
                        <button id={styles.o} onClick={() => getAct('o')}></button>
                        <button id={styles.r} onClick={() => getAct('r')}></button>
                        <button id={styles.old} onClick={() => getAct('old')}>Взрослые</button>
                    </div>
                    {act == 'w' ? 
                        (<White />) : (act == 'y' ? 
                        (<Yellow />) : (act == 'o' ?
                        (<Orange/>) : (act == 'r' ?
                        (<Red />) : (act == 'old' ?
                        (<Old />) : (<div>Not found</div>)))))}
                </div>
            </article>
        </Layout>
    )
}

export default Programms