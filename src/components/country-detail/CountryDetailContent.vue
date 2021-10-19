<template>
  <div class="details">
    <div class="details__image">
      <base-image :path="country.flag" :name="country.name" />
    </div>
    <div class="details__main">
      <div class="details__wrapper">
        <div class="details__primary">
          <div class="details__title">
            <h1>{{ country.name }}</h1>
          </div>
          <div class="details__section">
            <div>
              <h2>Native Name:</h2>
              <small>{{ country.nativeName }}</small>
            </div>
            <div>
              <h2>Population:</h2>
              <small>{{ country.population }}</small>
            </div>
            <div>
              <h2>Region:</h2>
              <small>{{ country.region }}</small>
            </div>
            <div>
              <h2>Sub Region:</h2>
              <small>{{ country.subregion }}</small>
            </div>
            <div>
              <h2>Capital:</h2>
              <small>{{ country.capital }}</small>
            </div>
          </div>
        </div>
        <div class="details__section">
          <div>
            <h2>Top Level Domain:</h2>
            <small>{{ country.topLevelDomain[0] }}</small>
          </div>
          <div>
            <h2>Currencies:</h2>
            <small>{{ country.currencies[0].code }}</small>
          </div>
          <div>
            <h2>Languages:</h2>
            <small v-for="lang in country.languages" :key="lang.iso639_1">
              {{ lang.name }}
            </small>
          </div>
        </div>
      </div>
      <div
        class="details__section"
        v-if="country.borders.length !== 0 && isError.length === 0"
      >
        <h2>Border Countries:</h2>
        <br />
        <base-button
          v-for="border in borders"
          :key="border"
          class="details__section--border"
        >
          {{ border }}
        </base-button>
      </div>
    </div>
  </div>
</template>
<script setup>
/**
 * Importaciones
 */
import BaseImage from "../ui/BaseImage.vue";
import BaseButton from "../ui/BaseButton.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
/**
 * Declaración de las Props
 */
const { country, url } = defineProps({
  country: {
    type: Object,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
/**
 * Declaración de Variables
 */
const isError = ref("");
const borders = reactive([]);
/**
 * Funciones
 */
async function getBorders() {
  borders.splice(0);
  if (country.borders) {
    for (let b of country.borders) {
      const res = await fetch(`${url}/alpha/${b}`);
      const data = await res.json();
      if (res.ok) {
        if (data instanceof Object) {
          if (data.hasOwnProperty("status") && data.status !== 200) {
            isError.value = data.message;
            return;
          }
        }
        borders.push(data.name);
      }
    }
  }
}
/**
 * Hooks
 */
onMounted(() => {
  getBorders();
});
</script>
<style scoped>
.details {
  margin-top: 15px;
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
}
.details__title h1 {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
}
.details__section {
  margin-top: 15px;
}
.details__section--border {
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
}
.details h2 {
  display: inline-block;
  font-weight: 800;
  margin-bottom: 10px;
  margin-right: 5px;
}
button {
  display: inline-block;
  margin: 5px;
}
small {
  font-size: 16px;
  font-weight: 400;
}
/**
* Media Queries
*/
@media screen and (min-width: 768px) {
  .details {
    display: flex;
  }
  .details__image {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 20px;
  }
  .details__main {
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .details__wrapper {
    display: flex;
    gap: 80px;
  }
}
</style>
