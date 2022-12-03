import { getProductDetails } from "./getProductDetails";

export const getCartTotalValue = async (cartContent) => {    
    let totalPrice = 0;
    for (const entry in cartContent) {
        const productDetail = await getProductDetails(cartContent[entry])
        totalPrice = totalPrice + productDetail.value.price
    }
    return totalPrice
}