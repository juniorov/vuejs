const app = new Vue({
    el: '#app',
    data: {
        titulo : 'Frutas',
        frutas : [
            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 0 },
            { nombre: 'Melon', cantidad: 20 }
        ],
        sportsTitulo: 'Sports',
        sports: [
            'basket',
            'futbol',
            'tennis'
        ],
        nuevaFruta: '',
        nuevaCantidad: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: this.nuevaCantidad
            });

            this.nuevaFruta = "";
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }

            return this.total;
        }
    }
});