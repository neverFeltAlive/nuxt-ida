<template>
  <div>
    <validated-input
      label="password"
      name="password"
      type="password"
      is-required
    />
    <validated-input label="name" name="name" type="email" is-required />
    <validated-input label="email" name="email" type="text" is-required />
    <validated-input label="price" name="price" type="text" is-required />
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().required().min(8),
});

useForm({
  validationSchema: schema,
});
</script>
