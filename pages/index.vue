<template>
  <div class="mx-auto max-w-7xl p-4">
    <!-- hero section -->
    <div class="relative overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-24">
        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1
              class="
                text-4xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block">A Store template</span>
              <span class="block text-primary-color">For your online business</span>
            </h1>
            <p
              class="
                mx-auto
                mt-3
                max-w-md
                text-base text-gray-500
                sm:text-lg
                md:mt-5 md:max-w-3xl md:text-xl
              "
            >
              A fake store template that can be used as a base for building your online store. Built using Nuxt.js and fake store API
            </p>
            <div class="mt-8 text-center">
              <router-link to="/products" class="relative text-lg mt-5 btn mr-2">
                View products →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>