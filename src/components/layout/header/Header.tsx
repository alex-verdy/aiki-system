import { FC, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import Image from "next/image";
// @ts-ignore
import { Modal } from "next-modal";
import { useSidebarContext } from "../sideBarCtx";
import { Service } from "@/service/car.service"
import { IContact } from "@/interfaces/contacts.interface";
import { IHeader } from "@/components/seo/meta.interface";



const Header: FC<IHeader> = ({right, count}) => {
  const [open, setOpen] = useState(false);
  let { setCity, city } = useSidebarContext()
  const contacts = useMemo(() => Service.getContacts(), []);
  let currentContact = contacts.filter((v: IContact) => v.city.includes(city || ''))[0].phone;
  let currentContactRaw = currentContact.replace(/\(|\)|-/g, '');

  const [toggleModal, setToggleModal] = useState(false);
  const cities = ['Санкт-Петербург', "Пермь", "Ижевск", "Каменка",];
  const MobMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const cityWasOpen = localStorage.getItem("cityWasOpen");
    if (!cityWasOpen) {
      setToggleModal(false);
      localStorage.setItem("cityWasOpen", "false");
    }
  }, []);

  const { pathname } = useRouter();
  console.log(right, count)
  return (
    <>
      <header className={styles.header}>
        <Image src="/logo.svg" alt="aiki-system logo" width={90} height={90} />
        <div className={ styles.pc} style={{marginLeft: `${right}px`}}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Главная
          </Link>
          <Link
            href="/programms"
            className={pathname === "/programms" ? styles.active : ""}
            id={Number(count) > 4 ? styles.wh : ''}
          >
            Программы
          </Link>
          <Link
            href="/#halls"
            className={pathname === "/about" ? styles.active : ""}
            id={Number(count) > 3 ? styles.wh : ''}
          >
            Наши залы
          </Link>
          <Link
            href="/students"
            className={pathname === "/students" ? styles.active : ""}
            id={Number(count) > 2 ? styles.wh : ''}
          >
            Ученики
          </Link>
          <Link
            href="/about_us"
            className={pathname === "/about_us" ? styles.active : ""}
            id={Number(count) > 1 ? styles.wh : ''}
          >
            О нас
          </Link>
        </div>
        <div className={styles.contact}>
          <div className={styles.pc_tel}>
            <a className={pathname === "/" ? styles.tel_wh : styles.tel_bl} href={`tel:${currentContactRaw}`}>{currentContact}</a>
            <span className={styles.icon}>
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
            </span>
          </div>
          <div className={pathname === "/" ? styles.city_wh : styles.city_bl} onClick={() => setToggleModal(true)}>
            <div >Ваш город: <span style={{color: 'var(--blue)'}}>{city}</span></div>
          </div>
        </div>

        <div  className={pathname === "/" ? styles.header_city : styles.black_city}
            onClick={() =>{
            setOpen(false)
            setToggleModal(true)}}
            >
              <div id='head_city'><p>Ваш город:</p> <span style={{color: 'var(--blue)'}}>{city}</span></div>
        </div>

        <div className={styles.mob}>
          <button
            className={styles.burger}
            onClick={MobMenu}
            style={
              pathname === "/" ? { color: "white" } : { color: "var(--blue)" }
            }
          >
            <span className={styles.nav}>
              <div
                className={styles.open}
                style={
                  pathname === "/"
                    ? {
                      border: "2px solid white",
                      borderRadius: 50,
                      width: 50,
                      height: 0,
                      marginTop: 10,
                    }
                    : {
                      border: "2px solid var(--blue)",
                      width: 50,
                      height: 0,
                      marginTop: 10,
                    }
                }
              />
              <div
                style={
                  pathname === "/"
                    ? {
                      border: "2px solid white",
                      borderRadius: 50,
                      width: 50,
                      height: 0,
                      marginTop: 10,
                    }
                    : {
                      border: "2px solid var(--blue)",
                      width: 50,
                      height: 0,
                      marginTop: 10,
                    }
                }
              />
              <div
                style={
                  pathname === "/"
                    ? {
                      border: "2px solid white",
                      borderRadius: 50,
                      width: 30,
                      height: 0,
                      marginTop: 10,
                      marginLeft: 20,
                    }
                    : {
                      border: "2px solid var(--blue)",
                      width: 30,
                      height: 0,
                      marginTop: 10,
                      marginLeft: 20,
                    }
                }
              />
            </span>
          </button>
          {open && (
            <div className={styles.mob_menu}>
              <button className={styles.burger} onClick={MobMenu}>
                <span className={styles.nav}>
                  <div
                    className={styles.open}
                    style={{
                      border: "1px solid white",
                      width: 50,
                      height: 0,
                      marginTop: 5,
                      transform: "rotateZ(45deg)",
                    }}
                  />
                  <div
                    style={{
                      border: "1px solid white",
                      width: 50,
                      height: 0,
                      marginTop: -1,
                      transform: "rotateZ(-45deg)",
                    }}
                  />
                </span>
              </button>
              <div>
                <Link
                  onClick={MobMenu}
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                >
                  Главная
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/programms"
                  className={pathname === "/programms" ? styles.active : ""}
                >
                  Программы
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/#halls"
                  className={pathname === "/about" ? styles.active : ""}
                >
                  Наши залы
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/students"
                  className={pathname === "/students" ? styles.active : ""}
                >
                  Ученики
                </Link>
                <Link
                  onClick={MobMenu}
                  href="/about_us"
                  className={pathname === "/about_us" ? styles.active : ""}
                >
                  О нас
                </Link>
              </div>
              <div className={styles.info}>
                <a className={styles.tel_mob} href={`tel:${currentContactRaw}`}>{currentContact}</a>
                <span className={styles.iconMob}>
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
                </span>
              </div>
              <div
                className='modal-header-css'
                onClick={() => {
                  setOpen(false)
                  setToggleModal(true)
                }}
              >
                <p style={{ "whiteSpace": "nowrap" }}>{city}</p>
              </div>
            </div>
          )}
        </div>
        <Modal toggle={toggleModal} setToggle={setToggleModal}>
          <Modal.Header>
            <h3 className="modal-container modal-header-css">Выберите город</h3>
          </Modal.Header>
          <Modal.Body>
            <form action="" className="modal-container">
              {cities.map((city, index) => (
                <div key={index} className="modal-form">
                  <input name="city" id={city} value={city} type="radio" onChange={(e) => {
                  e.preventDefault();
                  const inputsHTML = document.getElementsByTagName("input");
                  const inputsObj = Array.from(inputsHTML);
                  const city = inputsObj.find(
                    (input) => input.checked
                  )?.defaultValue;
                  if (!city) return;
                  setCity && setCity(city);
                  localStorage.setItem('city', city)
                  setToggleModal(false);
                }}/>
                  <label htmlFor={city} >{city}</label>
                </div>
              ))}
            </form>
          </Modal.Body>
        </Modal>
      </header >
    </>
  );
};

export default Header;
