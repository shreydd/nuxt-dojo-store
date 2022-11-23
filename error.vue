<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl ">Oops.</p>
        <p class="mt-7">{{error.message}}</p>
        <button class="btn my-7" @click="handleClearError">Go home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    // clearError is a built in function in nuxt
    const handleClearError =() => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>

</style>