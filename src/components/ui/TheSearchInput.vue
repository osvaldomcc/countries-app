<template>
  <form role="form" @submit.prevent="emitCountry">
    <div class="form__group">
      <figure @click="emitCountry">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </figure>
      <input
        type="text"
        name="search"
        id="form__search"
        placeholder="Search for a country..."
        v-model.trim="search"
      />
    </div>
  </form>
</template>

<script setup>
/**
 * Importaciones
 */
import { ref } from "@vue/reactivity";

/**
 * Variables
 */
const search = ref("");
/**
 * Emits
 */
const emit = defineEmits(["getCountry", "getAll"]);
/**
 * Funciones
 */
function emitCountry() {
  if (search.value.length > 0) {
    emit("getCountry", search.value);
  } else {
    emit("getAll");
  }
}
</script>
<style scoped>
figure svg {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
form {
  background: var(--white);
  border-radius: 5px;
  padding: 8px 20px;
  box-shadow: 0px 0px 10px -5px var(--light-mode-input);
}
.form__group {
  display: flex;
  align-items: center;
}
#form__search {
  border: none;
  padding: 8px 25px;
  width: 100%;
}
#form__search::placeholder {
  color: var(--light-mode-text);
  font-size: 12px;
}
form input {
  background: none;
}
/**
* Media Queries
*/
@media screen and (min-width: 768px) {
  form {
    width: 30%;
  }
}
</style>
