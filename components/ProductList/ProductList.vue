<template>
  <div>
    <product-item
      v-for="product in products"
      :key="product.id"
      :image="product.img"
      :name="product.name"
      :price="product.price"
    />
  </div>
</template>

<script setup>
import { useProductsStore } from '~/store/useProductsStore';

const { products } = useProductsStore();
</script>
