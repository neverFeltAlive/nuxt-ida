<template>
  <form @submit.prevent>
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

const schema = yup.object({
  productName: yup.string().required().label('Название товара'),
  imageUrl: yup.string().required().url().label('Ссылка на изображение'),
  productPrice: yup.number().min(1).required().label('Цена'),
});

const { errors, values } = useForm({
  validationSchema: schema,
});

const isFormReadyForSubmission = computed(
  () =>
    !!values.productPrice &&
    !!values.imageUrl &&
    !!values.productName &&
    !Object.keys(errors.value).length
);
</script>
