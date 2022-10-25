export interface Products{
    productId: string,
    qty: number
}
export interface Order {
    userId: string,
    client: string, 
    products: Products
}
export interface OrderRpta{
    id: string, 
    userId: string,
    client: string,
    products: Products,
    
}
