<template>
  <div>
    <h3>Name: {{ name }}</h3>
    <p>Price: {{ price }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>
