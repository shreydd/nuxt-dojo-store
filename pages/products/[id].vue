<template>
  <div>
    <!-- nuxt component to render meta things -->
    <Head>
      <Title>Nuxt Dojo | {{product.title}}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>

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

    if(!product.value) {
      throw createError({statusCode: 404, statusMessage: 'product not found', fatal: true})
      // since this is handled client side, a direct link will not show the error, so `fatal: true` will force it to do so
    }

</script>

<style scoped>
</style>