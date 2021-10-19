<template>
  <section>
    <div class="container">
      <div class="actions" v-show="existCountries">
        <the-search-input
          @get-country="getTheCountry"
          @get-all="fetchCountries"
        />
        <the-dropdown @region="getCountryByRegion" />
      </div>
    </div>
    <div class="cards__container">
      <spinner v-if="isLoading && noErrors" />
      <suspense v-else-if="noErrors">
        <template #default>
          <div class="cards">
            <the-card v-for="country in countries" :key="country.alpha2Code">
              <router-link
                :to="{
                  name: 'country-detail',
                  params: { id: country.alpha2Code },
                }"
              >
                <the-card-content
                  :img="country.flag"
                  :name="country.name"
                  :population="country.population"
                  :region="country.region"
                  :capital="country.capital"
                />
              </router-link>
            </the-card>
          </div>
        </template>
        <template #fallback>
          <h1>Not Found Content</h1>
        </template>
      </suspense>
      <div class="container" v-else>
        <the-error-msg :msg="isError" />
      </div>
    </div>
  </section>
</template>
<script setup>
/**
 * Importaciones
 */
import { computed, onMounted, ref } from "@vue/runtime-core";
import TheSearchInput from "../components/ui/TheSearchInput.vue";
import TheDropdown from "../components/ui/TheDropdown.vue";
import TheCard from "../components/ui/TheCard.vue";
import TheCardContent from "../components/ui/TheCardContent.vue";
import Spinner from "../components/ui/Spinner.vue";
import TheErrorMsg from "../components/ui/TheErrorMsg.vue";
/**
 * Declaraciones de variables
 */
const countries = ref([]);
const isLoading = ref(true);
const isError = ref("");
const baseUrl = import.meta.env.VITE_BASE_URL;
/**
 *  Obtener Data
 */
async function getData(url) {
  isError.value = "";
  isLoading.value = true;
  const res = await fetch(`${url}`);
  const data = await res.json();
  if (res.ok) {
    if (data instanceof Object) {
      if (data.hasOwnProperty("status") && data.status !== 200) {
        isError.value = data.message;
        return;
      }
    }
    countries.value = [];
    countries.value = data;
    isLoading.value = false;
  } else {
    isError.value = res.statusText;
  }
}
/**
 * Obtener Todos los Países
 */
function fetchCountries() {
  getData(
    `${baseUrl}/all?fields=name,capital,population,region,alpha2Code,flag`
  );
}
/**
 * Obtener Países por Región
 */
function getCountryByRegion(region) {
  getData(`${baseUrl}/continent/${region}`);
}
/**
 * Obtener País
 */
function getTheCountry(country) {
  getData(
    `${baseUrl}/name/${country}?fields=name,capital,population,region,alpha2Code,flag`
  );
}
/**
 * Computed
 */
const noErrors = computed(() => isError.value.length === 0);
const existCountries = computed(() => countries.value.length > 0);
/**
 * Hooks
 */
onMounted(() => {
  fetchCountries();
});
</script>
<style scoped>
.actions {
  animation: fadeInAppear 1s;
  -webkit-animation: fadeInAppear 1s;
  -moz-animation: fadeInAppear 1s;
  -o-animation: fadeInAppear 1s;
}
/**
* Media Queries
*/
@media screen and (min-width: 569px) {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (min-width: 768px) {
  .cards__container {
    max-width: 1440px;
    margin: auto;
  }
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 992px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
