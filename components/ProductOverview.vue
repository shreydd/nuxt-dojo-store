<template>
    <div class="card grid md:grid-cols-2 items-center justify-center">
        <img :src="product.image" alt="{{product.title}}" class="mx-auto my-7 h-32">
        <div class="flex flex-col">
            <h1 class="mb-3 text-xl">{{product.title}}</h1>
            <p class=""> ${{product.price}} </p>
            <NuxtLink :to="`/products/${product.id}`">
                <span class="btn my-4 inline-block">View details</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const item = defineProps(['item'])

    const product = await getProductDetails(item.item);
</script>

<style lang="scss" scoped>

</style>