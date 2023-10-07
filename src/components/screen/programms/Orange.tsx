import { FC } from 'react'
import styles from './Programms.module.css'

const Orange: FC = () => {
    return(
        <div className={styles.color}>
            <div className={styles.first}>
                <p><span>Оранжевый пояс </span>| 7-кю</p>
                <p><span>Возраст: </span>10-12 лет</p>
                <p><span>Кол-во тренировок: </span>72</p>
            </div>
            <hr/>
            <div className={styles.second}>
                <div className={styles.block}>
                    <span>Самостраховка</span>
                    <ul>
                        <li>Кувырок вперед через голову</li>
                        <li>Кувырок назад через голову</li>
                        <li>Кувырок вперед через плечо</li>
                        <li>Кувырок назад через плечо</li>
                        <li>Падение вперед через голову</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс ударов</span>
                    <ul>
                        <li>Прямые верхние удары </li>
                        <li>Нижние удары</li>
                        <li>Боковые удары</li>
                        <li>Верхний блок </li>
                        <li>Нижний блок</li>
                        <li>Параллельный блок</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <span>Комплекс приемов</span>
                    <ul>
                        <li>Укладка за руку от бокового удара <br/>(диагональ 1)</li>
                        <li>Укладка за руку от бокового удара <br/>(диагональ 2)</li>
                        <li>Скручивание кисти от нижнего удара <br/>(диагональ 1)</li>
                        <li>Удержание за шею и руку от бокового удара</li>
                        <li>Опрокидывание на спину за плечи <br/>от бокового удара</li>
                        <li>Опрокидывание набок за руку <br/>от бокового удара (диагональ 2)</li>
                    </ul>
                </div>
            </div>
            <div className={styles.third}>
                <div className={styles.th_block}>
                    <span>Тестирование</span>
                    <ul>
                        <li>Опрокидывание набок за руку от бокового удара (диагональ 2) в течение одной минуты, не меньше двенадцати раз.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Orange