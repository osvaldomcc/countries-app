<template>
  <figure>
    <img :src="img" :alt="name" />
  </figure>
  <div class="card__content">
    <h1>{{ name }}</h1>
    <div class="card__content--description">
      <strong>Population</strong> : {{ population ?? 0 }}
    </div>
    <div class="card__content--description">
      <strong>Region</strong> : {{ region ?? "Unknown" }}
    </div>
    <div class="card__content--description">
      <strong>Capital</strong> : {{ capital ?? "Unknown" }}
    </div>
  </div>
</template>
<script setup>
/**
 * Declaración de Props
 */
defineProps({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  population: {
    type: Number,
  },
  region: {
    type: String,
  },
  capital: {
    type: String,
  },
});
</script>
<style scoped>
.card__content {
  padding: 20px 25px;
}
h1 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
}
.card__content--description {
  margin-bottom: 10px;
}
strong {
  font-weight: 600;
}
figure {
  height: 200px;
  overflow: hidden;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
