<template>
  <label :for="$attrs.id">{{ label }}</label>
  <input :value="modelValue" v-bind="$attrs" @input="handleInput($event)" />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['update:modelValue']);
const handleInput = (event) => {
  emits('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>
@import 'style';
</style>
