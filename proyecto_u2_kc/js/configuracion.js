console.log(Vue)

const app = Vue.createApp({
  template: `
    <h2>Hola MUNDO!!!</h2>
    <h2>Hola MUNDO!!!</h2>
    {{1+1}}
    `
})

app.mount('#myApp')
