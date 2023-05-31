<template>
  <form @submit.prevent="handleProductSubmit">
    <validated-input
      label="Название товара"
      name="productName"
      type="text"
      is-required
    />
    <validated-input
      label="Ссылка на изображение"
      name="imageUrl"
      type="text"
      is-required
    />
    <validated-input
      label="Цена"
      name="productPrice"
      type="text"
      mask-type="price"
      is-required
      is-masked
    />
    <base-button :disabled="!isFormReadyForSubmission">Добавить</base-button>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import BaseButton from '~/components/BaseButton/BaseButton.vue';
import { useProductsStore } from '~/store/useProductsStore';

const schema = yup.object({
  productName: yup.string().required().label('Название товара'),
  imageUrl: yup.string().required().url().label('Ссылка на изображение'),
  productPrice: yup.number().min(1).required().label('Цена'),
});

const { errors, values, handleSubmit, handleReset } = useForm({
  validationSchema: schema,
});

const { addProduct } = useProductsStore();

const isFormReadyForSubmission = computed(
  () =>
    !!values.productPrice &&
    !!values.imageUrl &&
    !!values.productName &&
    !Object.keys(errors.value).length
);

const handleProductSubmit = handleSubmit((values) => {
  if (isFormReadyForSubmission) {
    addProduct(values);
    handleReset();
  }
});
</script>
