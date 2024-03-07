
export interface Medicine {
    _id: string,
    name: string,
    price: number,
    shop_id: string,
    image: string,
    quantity?: number
}

export interface Shop {
    _id: string,
    name: string,
    medicines: Medicine[]
}

export interface ShopsState {
    shops: Shop[],
    activeShopId: string,
    getAllShopsLoading: boolean,
    getAllShopsError: string,
    getOneShopMedicinesLoading: boolean,
    getOneShopMedicinesError: string
}