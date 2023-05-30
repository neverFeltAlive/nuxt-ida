<template>
  <div>
    <h3>{{ name }}</h3>
    <p>{{ price }}</p>
  </div>
</template>

<script setup>
import { number } from 'yup';

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
    type: number,
    required: true,
  },
});
</script>
