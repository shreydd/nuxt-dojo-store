<template>
    <div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

    const products = await getProducts();

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