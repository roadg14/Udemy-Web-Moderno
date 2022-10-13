import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) // Uma segunda forma de se fazer com o render.
    //render(createElement) { // Função render que tambem vai usar a função CreateElement.
    //    return createElement(App)
    //}
}).$mount("#app") // Usando esse ".mount(#app) ele faz o mesmo que o "el:".