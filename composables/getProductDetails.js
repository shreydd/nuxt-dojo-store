export const getProductDetails = async (id) => {
    const uri = 'https://fakestoreapi.com/products/' + id;
    const { data } = await useFetch(uri, {key: (id).toString()});
    return data;
}