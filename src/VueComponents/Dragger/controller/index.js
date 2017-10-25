import Vue from 'vue'


import App from '../component/App.vue'


const Controller = {
    init() {
        const app = new Vue({
            el: '#app',
            render: h => h(App)
        })
    }
}


module.exports = Controller