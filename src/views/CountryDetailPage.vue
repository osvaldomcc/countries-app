<template>
  <div class="container">
    <div class="container__button" v-show="country">
      <base-button @on-pressed="goBack" icon="arrow-back-outline">
        Back
      </base-button>
    </div>
    <spinner v-if="!country && noErrors" />
    <suspense v-else>
      <template #default>
        <country-detail-content :country="country" :url="baseUrl" />
      </template>
      <template #fallback>
        {{ isError }}
      </template>
    </suspense>
  </div>
</template>
<script setup>
/**
 * Importaciones
 */
import { useRouter } from "vue-router";
import { onMounted, ref, computed } from "@vue/runtime-core";
import Spinner from "../components/ui/Spinner.vue";
import BaseButton from "../components/ui/BaseButton.vue";
import CountryDetailContent from "../components/country-detail/CountryDetailContent.vue";
/**
 * Declaraciones de variables
 */
const router = useRouter();
const isLoading = ref(false);
const isError = ref("");
const baseUrl = import.meta.env.VITE_BASE_URL;
const country = ref(null);
const goBack = () => router.replace("/");
/**
 * Props
 */
const { id } = defineProps({
  id: {
    type: String,
    required: true,
  },
});
/**
 * Obtener Country
 */
async function getData(url) {
  isError.value = "";
  isLoading.value = false;
  const res = await fetch(`${url}`);
  if (res.ok) {
    const data = await res.json();
    country.value = data;
    isLoading.value = true;
  } else {
    isError.value = "Network Error";
  }
}
/**
 * Computed
 */
const noErrors = computed(() => isError.value.length === 0);
/**
 * Hooks
 */
onMounted(() => {
  getData(
    `${baseUrl}/alpha/${id}?fields=name,flag,nativeName,population,
    region,subregion,capital,topLevelDomain,currencies,languages,borders`
  );
});
</script>
<style scoped>
.container__button {
  animation: fadeInAppear 1s;
  -webkit-animation: fadeInAppear 1s;
  -moz-animation: fadeInAppear 1s;
  -o-animation: fadeInAppear 1s;
}
</style>
