<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Este es el componente principal!!!</h1>
  <Contador title="Estudiante"/>
  <Contador title="Profesor"/>

</template>

<script>

import Contador from './components/Contador.vue'
export default {
  props['titulo'],
  name: 'App',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
