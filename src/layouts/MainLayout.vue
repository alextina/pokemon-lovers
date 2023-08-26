<template>
  <div>
    <h1>List of Pokémon</h1>
    <ul>
      <li class="text-capitalize" v-for="pokemon in pokemonData" :key="pokemon">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemonData: [],
    };
  },
  mounted() {
    this.fetchpokemonData();
  },
  methods: {
    fetchpokemonData() {
      axios
        .get("https://alextina-pokemon-data-server.onrender.com/api/pokemon")
        .then((response) => {
          this.pokemonData = response.data.map((pokemon) => pokemon);
        })
        .catch((error) => {
          console.error("Error fetching Pokémon list:", error);
        });
    },
  },
};
</script>
