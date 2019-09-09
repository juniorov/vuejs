Vue.component('padre',{
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{ numeroPadre }}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            <hr>
            {{ nombrePadre }}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event" :text="textTest"></hijo>
            <hr>
            <input type="text" class="form-control" v-model="textTest" />
            <p>{{ textTest }}</p>
        </div>
    `,
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: ' --- ',
            textTest : ''
        };
    },
});