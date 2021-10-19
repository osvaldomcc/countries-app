<template>
  <figure>
    <img :src="path" :alt="name" />
  </figure>
</template>
<script setup>
/**
 * Declaración de las Props
 */
defineProps({
  name: {
    type: String,
  },
  path: {
    type: String,
  },
});
</script>
<style scoped>
figure {
  height: 200px;
  overflow: hidden;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
/**
* Media Queries
*/
@media screen and (min-width: 428px) {
  figure {
    height: 250px;
  }
}
@media screen and (min-width: 540px) {
  figure {
    height: 300px;
  }
}
@media screen and (min-width: 540px) {
  figure {
    height: 400px;
  }
}
</style>
