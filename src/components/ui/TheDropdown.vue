<template>
  <div class="dropdown">
    <div
      class="dropdown__header"
      tabindex="0"
      @click="toggleShowing"
      ref="dropDown"
    >
      <h1>Filter by Region</h1>
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Down</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </figure>
    </div>
    <div class="dropdown__content" v-show="isShowing">
      <ul>
        <a @click="emitRegion('africa')"><li>Africa</li></a>
        <a @click="emitRegion('americas')"><li>America</li></a>
        <a @click="emitRegion('asia')"><li>Asia</li></a>
        <a @click="emitRegion('europe')"><li>Europe</li></a>
        <a @click="emitRegion('oceania')"><li>Oceania</li></a>
      </ul>
    </div>
  </div>
</template>

<script setup>
/**
 * Importaciones
 */
import { ref } from "@vue/reactivity";
import { onClickOutside } from "@vueuse/core";

/**
 * Variables
 */
const isShowing = ref(false);
const dropDown = ref(null);
/**
 * Funciones
 */
const toggleShowing = () => (isShowing.value = !isShowing.value);
/**
 * Emits
 */
const emit = defineEmits(["region"]);
const emitRegion = function (region) {
  emit("region", region);
};
/**
 * Manejo de Eventos
 */
onClickOutside(dropDown, (event) => {
  setTimeout(() => {
    isShowing.value = false;
  }, 200);
});
</script>

<style scoped>
.dropdown {
  position: relative;
  margin-top: 30px;
  width: 60%;
  cursor: pointer;
}
.dropdown__header {
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 15px 20px;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
}
.dropdown__header h1 {
  color: var(--light-mode-text);
  font-weight: 300;
}
figure svg {
  width: 15px;
  height: 15px;
}
.dropdown__content {
  width: 100%;
  margin-top: 5px;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  background: var(--white);
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
}
.dropdown__content ul {
  border-radius: 5px;
  list-style: none;
  margin-top: 5px;
}
.dropdown__content ul li {
  padding: 10px 25px;
  border-radius: 5px;
  transition: all 0.1s;
}
.dropdown__content ul li:hover {
  cursor: pointer;
  background-color: var(--light-mode-text);
  color: var(--light-mode-background);
  width: 100%;
}
/**
* Media Queries
*/
@media screen and (min-width: 568px) {
  .dropdown {
    margin-top: 0;
    max-width: 30%;
  }
}
@media screen and (min-width: 992px) {
  .dropdown {
    max-width: 20%;
  }
}
</style>
