<template>
  <div>
    <v-container>
      <v-row :wrap="true">
        <v-col cols="12">
          <v-card>
            <v-date-picker
              v-model="fecha"
              full-width
              locale="es-CR"
              :min="minimo"
              :max="maximo"
              @change="getDolar(fecha)"
            >

            </v-date-picker>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card color="error" dark>
            <v-card-text class="display-1 text-center">valor: {{ valor }}  </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data(){
    return {
      fecha: new Date().toISOString().substr(0,10),
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10),
      valor: null
    }
  },
  methods: {
    ...mapMutations(['showLoad', 'hideLoad']),
    async getDolar(dia){
      let diaIn = dia.split('-'),
          newDate = [diaIn[2], diaIn[1], diaIn[0]].join('-');

      try{
        this.showLoad({ titulo: 'Accediendo', color: 'success' });

        let datos = await axios.get(`https://mindicador.cl/api/dolar/${newDate}`);

        if(datos.data.serie.length > 0){
          this.valor = await datos.data.serie[0].valor;
        }else{
          this.valor = "No hay valor";
        }
      }catch(error){
        // console.error(error);
      }finally{
        this.hideLoad();
      }
    }
  },
  created() {
    this.getDolar(this.fecha);
  }
};
</script>
