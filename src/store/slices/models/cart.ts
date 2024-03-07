import { medicine } from "./shops"

export interface CartProd extends medicine {
    quantity: number
}

export interface Order {
    userEmail: string,
    userName: string,
    userAddress: string,
    userPhone: string,
    items: {productId: string, quantity: number}[],
    totalPrice: number,
}

export interface CartState {
    products: CartProd[],
    userOrders: Order[],
    userOrdersLoading: boolean,
    userOrdersError: string,
    orderIsConfirmed: boolean,
    createOrderError: string
}