<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container rounded-3">
    <header>
      <div class="d-flex justify-content-center mb-5">
        <img alt="Vue logo" class="logo" src="@/assets/ussd_logo_black.png" width="125" />
      </div>

      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->

        <nav class="d-none">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-6">
        <RouterView />
      </div>
    </div>
    <footer class="fixed-bottom">
      <div class="d-flex justify-content-center">
        <span class="text-muted small me-3">© {{ new Date().getFullYear() }}</span>
        <a href="https://coder256.xyz" class="text-decoration-none text-muted small">
          <img alt="Vue logo" class="logo" src="@/assets/logo.png" height="12" />
          coder256
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  height: 90dvh;
}
</style>
