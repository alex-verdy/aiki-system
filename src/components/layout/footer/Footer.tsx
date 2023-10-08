import styles from './footer.module.css'
import { FC } from "react";
import Image from 'next/image';
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Image
                    src="logo.svg"
                    width={90}
                    height={90}
                    alt='Логотип айки-систем' />
                <ul>
                    <Link href="/" >
                        <li>Главная</li>
                    </Link>
                    <Link href="/programms">
                        <li>Программы</li>
                    </Link>
                    <Link href="/#halls">
                        <li>Наши залы</li>
                    </Link>
                    <Link href="/students">
                        <li>Ученики</li>
                    </Link>
                    <Link href="/about_us">
                        <li>О нас</li>
                    <Link>
                </ul>
                <a className={styles.iconLink} href={`https://t.me/aikido_rus`}><Image
                                width={30}
                                height={30}
                                src={"/tg.svg"}
                                alt="telegram logo"
                            /></a>
                            <a className={styles.iconLink} href={`https://vk.com/aikido_russia`}>
                                <Image
                                    width={30}
                                    height={30}
                                    src={"/wu.svg"}
                                    alt="what`s up logo"
                                /></a>
            </div>
             <span>S.ink studio &copy; 2022</span>
        </footer>
    )
}

export default Footer
