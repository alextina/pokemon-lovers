<template>
  <q-layout>
    <pokemon-list />
  </q-layout>
</template>

<script>
import PokemonList from "../components/PokemonList.vue";

export default {
  name: "MainLayout",
  components: {
    PokemonList,
  },
};
</script>
