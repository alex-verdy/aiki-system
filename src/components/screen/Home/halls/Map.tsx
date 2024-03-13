import { renderToString } from "react-dom/server";
import {type FC, useEffect, useState} from "react";
import Script from "next/script";
import {ICity, IMap} from "@/interfaces/halls.interfaces";
import styles from "./Halls.module.css";

// @ts-ignore
let map = null
const init = (hallMap: ICity, ymaps: any) => () => {
    // @ts-ignore
    if (map){
        map.destroy()
        map = null
    }
    console.log("INIT")
    map = new ymaps.Map('map', {
        center: hallMap.center,
        zoom: hallMap.zoom
    });

    map.controls.remove('geolocationControl'); // удалить геолокацию
    map.controls.remove('searchControl'); // удалить поиск
    map.controls.remove('trafficControl'); // удалить контроль трафика
    map.controls.remove('typeSelector'); // удалить тип
    map.controls.remove('fullscreenControl'); // удалить кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удалить контрол зуммирования
    map.controls.remove('rulerControl'); // удалить контрол правил
    map.behaviors.disable(['scrollZoom']); // отключить скролл карты

    hallMap.address.forEach((address) => {
        map!.geoObjects.add(new ymaps.Placemark(address.center, {
            balloonContent: renderToString(
                <div className={styles.card}>
                    <img
                        src={address.img}
                        width={330}
                        height={180}
                        alt={address.name}
                    />
                    <div className={styles.text}>
                        <div className={styles.address}>
                            <span>Адрес:</span>
                            <br/>
                            <div>{address.name}</div>
                        </div>
                        <div className={styles.timetable}>
                            <span>Расписание:</span>{" "}
                            {address.timetable.map((timetable, index) => (
                                <div key={index}>
                                    <div>{timetable.day}</div>
                                    {timetable.time.map((time, index) => (
                                        <div key={index} className={styles.time}>{time}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={styles.coach}>
                            <span>Тренер:</span> {address.coach}
                        </div>
                    </div>
                </div>
            )
        }, {
            preset: 'islands#blueSportIcon'
        }))

    })
}
const Map: FC<IMap> = ({hallMap}) => {
    if (!hallMap) return null;
    console.log("MAP:", hallMap)
    const [load, setLoad] = useState(false)
    useEffect(() => {
        if (load){
            console.log({load})
            // @ts-ignore
            ymaps.ready(init(hallMap, ymaps))

        }
    }, [load, hallMap]);
    return (
        <div className={styles.box}>
            <Script
                src={"https://api-maps.yandex.ru/2.1/?lang=ru_RU"}
                onLoad={()=>setLoad(true)}
            />
            <div id="map" className={styles.map}></div>
        </div>
    );
};

export default Map;
