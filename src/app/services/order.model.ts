export interface Order {
    id: number;
    buyerId: number;
    sellerId: number;
    price: number;
    quantity: number;
    status: string;
    assertionText: string;
    buyerName: string;
    sellerName: string;
};