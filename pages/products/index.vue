<template>
    <div>
        <div class="" v-if="pending">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div class="" v-for="entry in 16" :key="entry">
                    <ProductCardSkeleton />
                </div>
            </div>
        </div>
        <div class="" v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <div class="" v-for="p in products" :key="p.id">
                    <ProductCard :product="p"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // const products = await getProducts();
    const { data:products, pending } = await useLazyAsyncData('product',  () => $fetch('https://fakestoreapi.com/products'))

    // overrides default meta tag values
    useHead({
        title: 'Nuxt Dojo | Store',
        meta: [
            {name: 'description', content: 'Nuxt 3 store template'}
        ]
    })

</script>

<style scoped>

</style>