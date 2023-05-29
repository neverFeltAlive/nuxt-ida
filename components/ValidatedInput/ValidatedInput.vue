<template>
  <div>
    <base-input
      v-model="value"
      v-bind="$attrs"
      :label="props.label"
      :name="props.name"
    />
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    required: true,
  },
});

const { errorMessage, value } = useField(() => props.name);
</script>
