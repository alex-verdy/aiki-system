export interface ITable {
    day: string;
    time: string[];
}

export interface IAddress {
    name: string;
    center: number[];
    timetable: ITable[];
    id: number;
    img: string;
    coach: string;
}


export interface ICity {
    id: number;
    city: string;
    src: string;
    center: number[];
    zoom: number;
    address: IAddress[];
}

export interface IHalls {
    halls: ICity[];
}

export interface IMap {
    hallMap: ICity;
}
