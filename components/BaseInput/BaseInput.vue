<template>
  <label :for="$attrs.id">{{ label }}</label>
  <input :value="modelValue" v-bind="$attrs" @input="handleInput" />
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  modelModifiers: {
    type: Object,
    default: () => ({}),
  },
});
const emits = defineEmits(['update:modelValue']);

const { modelModifiers } = toRefs(props);

const handleInput = (e) => {
  let value = e.target.value;

  if (modelModifiers.value.price) {
    value = maskPriceInput(value);
  }

  emits('update:modelValue', value);
};
</script>
