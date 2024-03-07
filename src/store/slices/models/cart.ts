import { Medicine } from "./shops";

export interface CartProd extends Medicine {
    quantity: number
}

export interface OrderHistory {
    _id: string;
    userEmail: string;
    userName: string;
    userAddress: string;
    userPhone: string;
    items: {
        productId: {
            _id: string;
            name: string;
            price: number;
            shop_id: string;
            image: string;
        };
        quantity: number;
        _id: string;
    }[];
    totalPrice: number;
    createdAt: string;
    __v: number;
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
    userOrders: OrderHistory[],
    userOrdersLoading: boolean,
    userOrdersError: string,
    orderIsConfirmed: boolean,
    createOrderError: string
}