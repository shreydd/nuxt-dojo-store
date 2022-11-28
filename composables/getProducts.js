export const getProducts = async () => {
    const uri = 'https://fakestoreapi.com/products';
    const { data } = await useFetch(uri);
    return data;
}