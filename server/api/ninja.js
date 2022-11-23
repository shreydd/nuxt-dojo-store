export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = useQuery(event)

    // handle POST data
    // const {age} = await useBody(event)
    
    const { currencyKey } = useRuntimeConfig()
    // api call with private key
    // useFetch is for frontend which is a wrapper for $fetch
    const {data} = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    return data
})