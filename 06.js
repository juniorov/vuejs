const app = new Vue({
    el: '#app',
    data: {
        saludo : 'soy ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('before create');
    },
    created(){
        console.log('create');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
});