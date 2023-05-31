<template>
  <div>
    <product-item
      v-for="product in products"
      :key="product.id"
      :image="product.imageUrl"
      :name="product.productName"
      :price="product.productPrice"
    />
  </div>
</template>

<script setup>
import { useProductsStore } from '~/store/useProductsStore';

const { products } = useProductsStore();
</script>
