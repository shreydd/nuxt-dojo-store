<template>
    <div class="max-w-7xl mx-auto p-4">
        <div class="text-center" v-if='!cart || !cart.length'>
            Nothing to see here
        </div>
        <div class="" v-else>
            <div class="" v-for="item in cart" :key="item">
                <ProductOverview :item="item" />
            </div>
            <div class="card my-7">
                    Total items: {{cart.length}}
                    <br />
                    Total price: 
            </div>
        </div>
    </div>
</template>

<script setup>
    const cart = useState('cart');
    const totalPrice = ref([]);
</script>

<style lang="scss" scoped>

</style>