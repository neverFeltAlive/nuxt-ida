<template>
  <label :for="$attrs.id">{{ label }}</label>
  <input
    :value="maskedInput"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
  isMasked: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);

const maskedInput = computed(() => {
  const valueToNumber = (value) => +value.trim().replaceAll(/\D/g, '') || '';

  return props.isMasked
    ? valueToNumber(modelValue.value || '')
        .toLocaleString()
        .replaceAll(',', ' ')
    : modelValue.value;
});
</script>
