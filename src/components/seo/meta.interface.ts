export interface IMeta{
    title: string
    description?: string
    header?: ICity[]
    right?: number
    count?: number
}

export interface ICity{
    id: number
    name: string
    price: number
    tel: string
    tg: string
    wu: string
}

export interface IHeader{
    right?: number
    count?: number
}
