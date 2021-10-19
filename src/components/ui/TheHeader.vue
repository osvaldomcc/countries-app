<template>
  <header>
    <div class="container">
      <div class="header">
        <router-link :to="{ name: 'home' }"
          ><h1>Where in the World?</h1></router-link
        >
        <button class="header__button" @click="toggleTheme">
          <figure>
            <template v-if="isDark">
              <img src="../../assets/icons/moon-dark.svg" alt="moon icon" />
            </template>
            <template v-else="!isDark">
              <img src="../../assets/icons/moon-light.svg" alt="moon icon" />
            </template>
            <figcaption>
              <h2>Dark Mode</h2>
            </figcaption>
          </figure>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
/**
 * Funciones
 */
/**
 * Función para cambiar a modo oscuro y claro
 */
function toggleTheme() {
  isDark.value = !isDark.value;
  useToggle(isDark);
}
</script>

<style scoped>
header {
  background: var(--white);
  box-shadow: 0px 2px 10px -6px var(--light-mode-input);
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
figure {
  display: flex;
  align-items: center;
}
figure img {
  width: 15px;
  height: 15px;
  margin-right: 8px;
}
h2 {
  font-weight: 300;
  line-height: 0;
}
.header__button {
  padding: 5px;
  cursor: pointer;
}
h1 {
  font-weight: 800;
}
@media screen and (max-width: 308px) {
  .header {
    flex-direction: column;
  }
}
</style>
