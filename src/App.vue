<template>
  <the-header />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>
<script setup>
import TheHeader from "./components/ui/TheHeader.vue";
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  color: var(--light-mode-text);
}
button {
  border: none;
  background: none;
}
body[color-scheme="dark"] {
  --dark-mode-elements: hsl(209, 23%, 22%);
  --light-mode-text: hsl(0, 0%, 100%);
  --light-mode-background: hsl(207, 26%, 17%);
  --white: hsl(209, 23%, 22%);
}
body[color-scheme="light"] {
  --light-mode-text: hsl(200, 15%, 8%);
  --light-mode-input: hsl(0, 0%, 52%);
  --light-mode-background: hsl(0, 0%, 98%);
  --white: white;
}
body {
  background: var(--light-mode-background);
}
.container {
  max-width: 1440px;
  margin: auto;
  padding: 20px;
}
:focus {
  outline: 1px solid var(--light-mode-input);
  border-radius: 5px;
}
a {
  text-decoration: none;
}
.ionicon {
  color: var(--light-mode-text);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/**
* Animaciones
*/
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 100;
    transform: translateY(0px);
  }
}
@keyframes fadeInAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>
