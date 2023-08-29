<template>
  <div v-if="pokemonStore.pokemonData.length">
    <h2>Pokémon Cards</h2>
    <div class="card-container">
      <q-card
        class="card-content"
        v-for="pokemon in pokemonStore.pokemonData"
        :key="pokemon.num"
      >
        <img :src="pokemon.img" alt="" />
        <h3>{{ pokemon.name }}</h3>
        <p>{{ pokemon.about }}</p>
      </q-card>
    </div>
  </div>
</template>

<script>
import { usePokemonStore } from "../stores/PokemonStore";

export default {
  name: "PokemonList",
  setup() {
    const pokemonStore = usePokemonStore();
    pokemonStore.fetchpokemonData();

    return {
      pokemonStore,
    };
  },
};
</script>
