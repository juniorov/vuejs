Vue.component('hijo',{
    template: //html
    `
        <div class="p-3 bg-info text-white">
            <h4>Componente Hijo: {{ numero }}</h4>
            <h4>Nombre: {{ nombre }}</h4>
            <button @click="numero++">+</button>
            <h5>{{ text }}</h5>
        </div>
    `,
    props: ['numero', 'text'],
    data(){
        return {
            nombre: 'Jr',
        }
    },
    mounted(){ //se envia los datos hacia el padre
        this.$emit('nombreHijo', this.nombre);
    }
});