<template>
  <h1>Juego</h1>

  <div id="contenedor-juego" v-if="banderaJuego">
    <p>Puntaje: {{puntaje}}</p>
    <p>Intento: {{intento}}</p>
  </div>

  <div>
    <img src="../img/negro.png" alt="N">
    <img src="../img/negro.png" alt="N">
    <img src="../img/negro.png" alt="N">
  </div>

  <div>
    <p>{{pokemonTexto1}}</p>
    <p>{{pokemonTexto2}}</p>
    <p>{{pokemonTexto3}}</p>
  </div>

  <button v-on:click="jugar()">Jugar</button>

</template>

<script>
export default {
  name: "Juego",
  data(){
    return{
      puntaje:0,
      intento:0,
      banderaJuego: true,

      pokemonTexto1 : "XXXXXXXXXX",
      pokemonTexto2 : "XXXXXXXXXX",
      pokemonTexto3 : "XXXXXXXXXX"

    }
  },
  methods:{
    jugar(){

    },
    obtenerAleatorio(tope){
      return Math.floor(Math.random()*tope) + 1
    },
    async consumirAPI(id){

    },
    definirPokemons(){

    },
    construirPokemons(){
      const vector = this.definirPokemons()
      const vectorIdPokemons = []
    },
    definirJuego(){
    }
  }
}
</script>

<style scoped>
img {
  margin: 0px 50px;
}
p{
  display: inline;
  margin: 0px 50px;
}

button{
  margin-top: 90px;
}
</style>