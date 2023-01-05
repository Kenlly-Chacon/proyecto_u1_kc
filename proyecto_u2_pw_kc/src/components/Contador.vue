<template>
  <h1>Mi primer componente</h1>
  <h2>Info Estudiante</h2>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <div>
    <button v-on:click="incrementar">+1</button>
    <button v-on:click="decrementar">-1</button>
  </div>
  <!--  <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
    <p>{{numero}}  <sup>2</sup> = {{obtenerCuadradoComputado}}</p>-->
</template>

<script>
export default {
  //Para poder utilizarlo afuera
  name: "Patito",
  data() {
    return {
      numero: 3
    }
  },
  methods: {
    obtenerCuadrado() {
      console.log('Se calcula cuadrado')
      return this.numero * this.numero
    },
    incrementar() {
      this.numero++
    },
    decrementar() {
      this.numero--
    }
  },
  // propiedad computada
  computed: {
    obtenerCuadradoComputado() {
      console.log('Se calcula cuadrado Computado')
      return this.numero * this.numero
    }
  }

}
</script>

<style scoped>
button {
  background-color: #64B687;
  border-radius: 5px;
  border: 1px solid white;
  margin: 0px 5px;
  cursor: pointer;
  padding: 5px 20px;
}
button:hover{
  background-color: #5aa67b;
}
</style>