<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
    definePageMeta({
    layout: "products",
    });

    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id;

    // fetch the product
    // under the hood useFetch is optimised to not perform unnecessary requests, so to diff this request from the other req made in the products/index file use the key argument
    const { data: product } = await useFetch(uri, {key: id})

</script>

<style scoped>
</style>