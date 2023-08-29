<template>
  <q-layout view="hHh lpR fFf">
    <q-toolbar>
      <img
        class="main-logo"
        src="./assets/pokemon-logo.png"
        alt="pokemon-logo"
      />
    </q-toolbar>
    <!-- <q-tabs>
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="bg-grey-8 text-white">
      <p>
        © 2023 <a href="https://alextina.pe" target="_blank">www.alextina.pe</a>
      </p>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
