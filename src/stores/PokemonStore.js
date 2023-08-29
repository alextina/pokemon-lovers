import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonData: [],
  }),
  actions: {
    async fetchpokemonData() {
      try {
        const response = await axios.get(
          "https://alextina-pokemon-data-server.onrender.com/api/pokemon"
        );
        this.pokemonData = response.data.map((pokemon) => pokemon);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    },
  },
});
