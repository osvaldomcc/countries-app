<template>
  <div class="alert-error">
    {{ msg }}
  </div>
</template>
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.alert-error {
  background: crimson;
  color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-weight: 800;
}
</style>
