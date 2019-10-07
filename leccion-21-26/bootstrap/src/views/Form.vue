
<template>
    <div>
        <b-container>
            <b-row class="mt-5">
                <b-col cols="12" md="3">
                    <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                    <small>minimum 3 caracteres</small>
                    <hr>
                    <b-form-input type="text" v-model="texto" :state="false"></b-form-input>
                    <p>
                        texto: {{ texto }}
                    </p>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-select v-model="select" :options="animales"></b-form-select>
                    <p>Seleccion: {{ select }}</p>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                    <p>Seleccion: {{ radio }}</p>
                </b-col>

                <b-col cols="12" md="3">
                    <b-form-checkbox-group v-model="check" :options="animalsCheck"></b-form-checkbox-group>
                    <p>Multiple: {{ check }}</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return {
            texto: '',
            select: '',
            radio: '',
            check: '',
            animales: [
                { value: null, text: 'Seleccione', },
                { value: 'perro', text : 'Perro' },
                { value: 'gato', text : 'Gato' },
                { value: 'pajaro', text : 'Pajaro' }
            ],
            animalesRadio: [
                { value: 'Pato', text : 'Pato' },
                { value: 'Vaca', text : 'Vaca' },
                { value: 'Buey', text : 'Buey' }
            ],
            animalsCheck: [
                { value: 'Pez', text : 'Pez' },
                { value: 'Flamenco', text : 'Flamenco' },
                { value: 'Tiburon', text : 'Tiburon' }
            ]
        }
    },
    computed: {
        comprobar(){
            return this.texto.length <= 2 ? false : true;
        }
    },
}
</script>