import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      titulo: '',
      estado : '',
      color: 'primary',
    }
  },
  mutations: {
    showLoad(state, payload){
      state.loading.titulo = payload.titulo;
      state.loading.estado = true;
      state.loading.color = payload.color;
    },
    hideLoad(state){
      state.loading.estado = false;
    }
  },
  actions: {

  }
})
