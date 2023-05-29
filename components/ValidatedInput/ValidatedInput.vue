<template>
  <div>
    <base-input v-model="value" v-bind="$attrs" :name="props.name" />
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: true,
  },
  defaultValue: {
    type: String,
    default: '',
  },
});

const { errorMessage, value } = useField(() => props.name);
</script>
