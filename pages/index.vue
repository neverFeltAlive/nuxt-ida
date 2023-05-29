<template>
  <div>
    <form-input
      id="test-id"
      v-model="input"
      label="test input"
      name="test-name"
    />
  </div>
</template>

<script setup>
const input = ref('fadsf');

watchEffect(() => {
  console.log(input.value);
});

watch(input, () => {
  console.log(input.value);
});
</script>
