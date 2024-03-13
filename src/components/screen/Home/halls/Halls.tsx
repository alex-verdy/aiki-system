import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IHalls, ICity } from "@/interfaces/halls.interfaces";
import { useSidebarContext } from "@/components/layout/sideBarCtx";
import Map from "./Map";
import styles from './Halls.module.css'

const Halls: FC<IHalls> = ({ halls }) => {
  console.log(halls);
  const { city } = useSidebarContext();
  if (!city) return null;
  let hallMap: ICity = halls.find((hall) => hall.city === city) || halls[0]
  const {asPath} = useRouter()
  let actCity: string = "Санкт-Петербург";
  if (asPath.includes("=")) {
    halls.map((hall) =>
      asPath == `/#?city=${String(hall.id)}`
        ? ((actCity = hall.city), (hallMap = hall))
        : ""
    );
  }
  
  return (
    <div>
      <details className={styles.city}>
        <summary>{city}</summary>
        <div className={styles.all}>
          {halls.length ? (
            halls.map((hall) => (
              <Link
                key={hall.id}
                className={city == hall.city ? styles.active : styles.default}
                href={`/#?city=${String(hall.id)}`}
              >
                {hall.city}
              </Link>
            ))
          ) : (
            <div>Not found</div>
          )}
        </div>
      </details>
      <Map hallMap={hallMap} />
    </div>
  );
};

export default Halls;
