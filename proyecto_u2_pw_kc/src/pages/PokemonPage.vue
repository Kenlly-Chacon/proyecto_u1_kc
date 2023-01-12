<template>
  <h1>!Quien es este pokemon!</h1>
  <PokemonImg/>
  <PokemonOpts/>
</template>

<script>
import PokemonImg from "/src/components/PokemonImg.vue"
import PokemonOpts from "/src/components/PokemonOpts.vue"
export default {
  name: "PokemonPage",
  components:{
    PokemonImg,
    PokemonOpts
  }

}
</script>

<style scoped>

</style>