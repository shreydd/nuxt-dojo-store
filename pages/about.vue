<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque vel
      cum veritatis aliquam laudantium odio, culpa placeat nihil obcaecati!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque vel
      cum veritatis aliquam laudantium odio, culpa placeat nihil obcaecati!
    </p>
    <div class="">{{about}}</div>
  </div>
</template>
  
<script setup>
  const {data: about} = await useFetch('/api/currency/INR')
</script>
  
  <style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>