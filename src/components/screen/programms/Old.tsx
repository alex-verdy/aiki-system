import { FC } from 'react'
import styles from './Programms.module.css'

const Old: FC = () => {
    return(
        <>
            <div className={styles.color}>
                <div className={styles.first}>
                    <span>Взрослая программа с 15 лет</span>
                </div>
                <hr/>
                <div className={styles.old_second}>
                    <div className={styles.block}>
                        <span>5-кю желтый пояс </span>
                        <ul>
                            <li>Atemi waza</li>
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <span>4-кю красный пояс  </span>
                        <ul>
                            <li>Otoshi waza</li>
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <span>3-кю зеленый пояс </span>
                        <ul>
                            <li>Kansetsu waza</li>
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <span>2-кю  синий пояс </span>
                        <ul>
                            <li>Nage waza</li>
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <span>1-кю коричневый пояс </span>
                        <ul>
                            <li>Osae waza</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Old