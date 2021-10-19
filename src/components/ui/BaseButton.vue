<template>
  <button @click="onClick" :class="icon ? '' : 'img'">
    <template v-if="icon">
      <figure style="color: red">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Arrow Back</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      </figure>
    </template>
    <slot />
  </button>
</template>
<script setup>
/**
 * Emits
 */
const emit = defineEmits(["onPressed"]);
const onClick = () => emit("onPressed");
/**
 * Props
 */
defineProps({
  icon: {
    type: String,
  },
});
</script>
<style scoped>
button {
  display: flex;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
  background-color: var(--white);
  align-items: center;
  border-radius: 5px;
  padding: 10px 25px;
  line-height: 0;
  cursor: pointer;
}
button.img {
  padding: 16px 25px;
}
figure {
  margin-right: 5px;
  width: 15px;
}
/**
* Media Queries
*/
@media screen and (min-width: 768px) {
  button {
    padding: 12px 40px;
  }
  button.img {
    padding: 18px 40px;
  }
}
</style>
