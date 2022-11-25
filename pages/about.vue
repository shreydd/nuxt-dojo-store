<template>
  <div class="mx-auto max-w-7xl p-4">
    <!-- hero section -->
    <div class="bg-gray-50">
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
                <span class="block">Get started with your</span>
                <span class="block text-primary-color">online business</span>
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
                Start selling your products with this portfolio template that doubles as a store / work collection and other limitless possibilities for your audience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <p class="text-center font-semibold text-xl text-gray-900">
            Built using these amazing libraries and tech
          </p>
          <div
            class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4"
          >
            <div
              class="
                col-span-1
                flex
                justify-center
                items-center
                md:col-span-2
                lg:col-span-1
              "
            >
              <img
                class="h-8"
                src="https://nuxtjs.org/design-kit/colored-text.svg"
                alt="NuxtJS"
              />
            </div>
            <div
              class="
                col-span-1
                flex
                justify-center
                items-center
                md:col-span-2
                lg:col-span-1
              "
            >
              <img
                class="h-6"
                src="../assets/icons/Tailwind_CSS_logo.svg"
                alt="Tailwind CSS"
              />
            </div>
            <div
              class="
                col-span-1
                flex
                justify-center
                items-center
                md:col-span-2
                lg:col-span-1
              "
            >
              <img
                class="h-8"
                src="https://fakestoreapi.com/icons/logo.png"
                alt="Fake Store API"
              />
            </div>
            <div
              class="
                col-span-1
                flex
                justify-center
                items-center
                md:col-span-2
                lg:col-span-1
              "
            >
              <img
                class="h-8"
                src="https://app.currencyapi.com/img/logo/currencyapi.png"
                alt="Currency API"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- net ninja section -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-secondary-color">
      <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/GBdO5myZNsQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div class="md:ml-auto md:w-1/2 md:pl-10">
          <p
            class="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Thanks to Net Ninja's Tutorial
          </p>
          <p class="mt-3 text-lg text-white">
            Built while following along Net Ninja's crash course on NuxtJS 3.
          </p>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC"
                target="_blank"
                class="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-white
                  px-5
                  py-3
                  text-base
                  font-medium
                  text-primary-color
                  hover:bg-gray-50
                "
              >
                View full playlist
                <!-- Heroicon name: mini/arrow-top-right-on-square -->
                <svg
                  class="-mr-1 ml-3 h-5 w-5 text-primary-color"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
// const {data: about} = await useFetch('/api/currency/INR')
</script>
  
  <style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>