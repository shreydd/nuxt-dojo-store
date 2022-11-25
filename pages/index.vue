<template>
  <div class="mx-auto max-w-7xl p-4">
    <!-- hero section -->
    <div
      class="bg-primary-color py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span class="block">Boost your productivity.</span>
        <span class="block">Start using our template today.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-white">
        Portfolio template for independent creators and artists.
      </p>
      <NuxtLink
        to="/products"
        class="
          mt-8
          inline-flex
          w-full
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
          sm:w-auto
        "
        >Fork template</NuxtLink
      >
    </div>
    <!-- feature section -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            Get. Set. Go
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Go from 0-1 in setting up your online presence and start selling merch
          </p>
        </div>
        <dl
          class="
            mt-12
            space-y-10
            sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
            lg:grid-cols-4 lg:gap-x-8
          "
        >
          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                Airtable integration 
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est,
              molestie blandit quis ac. Lacus.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                Products store
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis.
              Nibh urna non parturient.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                SEO Ready
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              Etiam cras augue ornare pretium sit malesuada morbi orci,
              venenatis. Dictum lacus.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                Responsive
              </p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id
              dignissim tristique proin sed.
            </dd>
          </div>
        </dl>
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