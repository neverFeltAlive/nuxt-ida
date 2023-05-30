<template>
  <div>
    <base-input
      v-model="value"
      v-bind="$attrs"
      :name="name"
      :model-modifiers="{ [maskType]: true }"
    />
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
  maskType: {
    type: String,
    default: '',
  },
});

const { errorMessage, value } = useField(() => props.name);
</script>
