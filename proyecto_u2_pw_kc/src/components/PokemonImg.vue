<template>
  <div class="pokemon-container">
    <img v-if="true" class="oculta-pokemon"
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
         alt="No se puede">
    <img v-if="true"
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
         alt="No se puede">
  </div>
</template>

<script>
export default {
  name: "PokemonImg",
  data(){
    return{
      idPokemon: 1,
      mostrarPokemon: true
    }
  }
}
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
  position: absolute;
}

img {
  /*position: absolute;*/
  height: 200px;
  /*right: 32%;*/
  -webkit-user-select: none;

}

.pokemon-container {

}

</style>