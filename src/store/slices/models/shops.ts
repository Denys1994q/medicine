
export interface medicine {
    _id: string,
    name: string,
    price: number,
    shop_id: string,
    image: string
}

export interface Shop {
    _id: string,
    name: string,
    medicines: medicine[]
}

export interface ShopsState {
    shops: Shop[],
    activeShopId: string,
    getAllShopsLoading: boolean,
    getAllShopsError: string,
    getOneShopMedicinesLoading: boolean,
    getOneShopMedicinesError: string
}