<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div class="" v-for="p in products" :key="p.id">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products
    // useFetch is a built-in composable provided by nuxt
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    // getting the data and reference / call it as products in this component / page

    // overrides default meta tag values
    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            {name: 'description', content: 'Nuxt 3 merch'}
        ]
    })

</script>

<style scoped>

</style>