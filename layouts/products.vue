<template>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto max-w-7xl p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <NuxtLink to="/products/cart">My cart</NuxtLink>
      </nav>
    </header>
  
    <!-- output page content -->
    <div class="container mx-auto max-w-7xl p-4">
      <slot />
    </div>

    <footer class="container mx-auto max-w-7xl p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>   
    </footer>

  </template>
  
  <style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
  </style>