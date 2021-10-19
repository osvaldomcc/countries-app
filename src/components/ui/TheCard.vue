<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
  overflow: hidden;
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
}
/**
* Media Queries
*/
@media screen and (min-width: 768px) {
  .card {
    width: 90%;
  }
}
</style>
