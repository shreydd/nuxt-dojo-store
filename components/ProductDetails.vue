<template>
    <div class="card">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{product.title}}</h2>
                <p class="text-xl my-7">Price - ${{product.price}}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p class="mb-7">{{product.description}}</p>
                <div class="" v-if="toggleAddCart">
                    <button @click="cartAdd" class="btn flex">
                        <i class="material-icons mr-2">add_shopping_cart</i>
                        <span>Add to cart</span>
                    </button>
                </div>
                <div class="" v-else>
                    <button @click="cartRemove" class="btn flex">
                        <i class="material-icons mr-2">remove_shopping_cart</i>
                        <span>Remove from cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product']);
    let toggleAddCart = ref(true);
    const cart = useState('cart', () => []);

    const cartAdd = () => {
        cart.value = [...cart.value, product['id']]; 
        console.log(cart.value);
        toggleAddCart.value = !toggleAddCart.value;
    }

    const cartRemove = () => {
        let array = cart.value;
        array = array.filter(item => item !== product.id);
        cart.value = array;
        console.log(cart.value);
        toggleAddCart.value = !toggleAddCart.value;
    }

    const checkCart = () => {
        let array = cart.value;
        for (const index in array) {
            console.log(array[index])
            if(array[index] == product.id) {
                toggleAddCart.value = false;
            }
        }
    }

    checkCart();
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>